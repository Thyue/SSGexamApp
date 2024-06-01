// 題庫管理工具
const express = require("express");
const router = express.Router();
const passport = require("passport");
const fs = require("fs");
const { formidable } = require("formidable");
const ExcelJS = require("exceljs");

const QuestionGroup = require("../../models/QuestionGroup");
const SystemInfo = require("../../models/SystemInfo");

// 路由：GET api/questionManage/test
// 用途：返回的請求的json數據
// 存取：public
router.get("/test", (req, res) =>
  res.json({
    msg: "題庫管理工具運作中",
  })
);

// 路由：POST api/questionManage/uploadQuestionGroup
// 用途：上傳/更新題組OK
// 存取：private
router.post("/uploadQuestionGroup", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.status(403).json({
      code: res.statusCode, // 403沒有權限
      msg: "非管理員無法新增題組",
    });
  } else {
    // 設定formidable上傳檔案處理參數
    const form = formidable({
      multiples: false, // 不允許多檔案傳輸
      uploadDir: __dirname + "/../../public/questionDB", // 儲存路徑
      keepExtensions: true, // 保留附檔名
      filename: (name, ext, part, form) => {
        return part.originalFilename; // 保持原檔案名字
      },
    });
    // formidable處理上傳檔案完畢後，回傳結果
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.json({
          code: 400,
          msg: "上傳失敗",
          sys: err,
        });
        return;
      }
      const filepath = Object.values(files)[0][0].filepath; // 已上傳檔案的路徑
      // 處理excel檔案
      const workbook = new ExcelJS.Workbook(); // 創建一個workbook
      // 讀取excel檔案
      workbook.xlsx
        .readFile(filepath)
        .then(() => {
          // 取得第一個worksheet
          const worksheet = workbook.getWorksheet(1);
          // 將檔案名稱改得跟excel內容D1一樣
          const questGroupName = worksheet.getCell("C1");
          if (questGroupName.value !== Object.values(files)[0][0].newFilename.split(".")[0]) {
            fs.renameSync(filepath, filepath.replace(Object.values(files)[0][0].newFilename, questGroupName.value + ".xlsx"));
          }
          // 儲存題組容器
          let questGroup = {
            QGID: "",
            type: "",
            subject: "",
            status: false,
            questNum: {
              TFQ: 0,
              SCQ: 0,
              MCQ: 0,
            },
            correctNum: {
              TFQ: 0,
              SCQ: 0,
              MCQ: 0,
            },
            familiarity: {
              TFQ: [],
              SCQ: [],
              MCQ: [],
            },
            questData: {
              TFQ: [],
              SCQ: [],
              MCQ: [],
            },
          };
          // 搜尋資料庫是否有相同名稱的題組
          let sameName = false; // [開關]是否有相同名稱的題組-用於是資料庫更新還是儲存
          QuestionGroup.find({ subject: questGroupName })
            .then((questGroupOnDB) => {
              // 若沒有的話新增資料庫並給與新的ID
              if (questGroupOnDB.length === 0) {
                questGroup.QGID = new Date().getTime(); // 新題組ID
                sameName = false;
              } else {
                questGroup.QGID = questGroupOnDB[0].QGID; // 賦予原先的ID
                sameName = true;
              }
              // 取得「題組類型」、「題組名稱」
              const column = worksheet.getRow(1);
              column.eachCell((cell, rowNumber) => {
                if (rowNumber === 2) {
                  questGroup.type = cell.value; // 題組類型
                } else if (rowNumber === 3) {
                  questGroup.subject = cell.value; // 題組名稱
                }
              });
              // 先判斷「準則」還是「學科」
              // 處理「準則」
              if (questGroup.type === "準則") {
                // 取得excel資料轉換成JSON格式
                const excelToJSON = [];
                worksheet.eachRow((row, rowNumber) => {
                  if (rowNumber === 1 || rowNumber === 2) return; // 跳過Excel的第一、二行
                  // 將每一行的資料轉換成JSON格式
                  const rowJson = {};
                  row.eachCell((cell, colNumber) => {
                    rowJson[worksheet.getRow(2).getCell(colNumber).value] = cell.value;
                  });
                  // 將每一行的資料存入excelToJSON
                  excelToJSON.push(rowJson);
                });
                // 將JSON格式轉換成題目格式
                excelToJSON.forEach((element) => {
                  // 處理「單選題」
                  if (typeof element["正確答案"] === "number") {
                    let q = {
                      QID: "",
                      content: "",
                      options: [],
                      correct: "",
                    };
                    questGroup.questNum.SCQ++; // 單選題數量+1
                    questGroup.familiarity.SCQ.push(0); // 單選題熟悉度初始化
                    q.QID = questGroup.QGID + "_1_" + element["項次"]; // 題目ID
                    q.content = element["題目"]; // 題目內容
                    // 鍵值長度有幾個，原本有項次、正確答案、題目，所以要減3，剩下的就是選項長度
                    let keyLength = Object.keys(element).length - 3;
                    // 題目選項，將選項存入options
                    for (let i = 1; i <= keyLength; i++) {
                      q.options.push(element["選項" + i]);
                    }
                    q.correct = q.options[element["正確答案"] - 1]; // 正確答案
                    questGroup.questData.SCQ.push(q); // 將題目存入questData
                    // 處理「多選題」
                  } else if (typeof element["正確答案"] === "string" && element["正確答案"] !== "O" && element["正確答案"] !== "X") {
                    let q = {
                      QID: "",
                      content: "",
                      options: [],
                      correct: [],
                    };
                    questGroup.questNum.MCQ++; // 多選題數量+1
                    questGroup.familiarity.MCQ.push(0); // 多選題熟悉度初始化
                    q.QID = questGroup.QGID + "_2_" + element["項次"]; // 題目ID
                    q.content = element["題目"]; // 題目內容
                    // 鍵值長度有幾個，原本有項次、正確答案、題目，所以要減3，剩下的就是選項長度
                    let keyLength = Object.keys(element).length - 3;
                    // 題目選項，將選項存入options
                    for (let i = 1; i <= keyLength; i++) {
                      q.options.push(element["選項" + i]);
                    }
                    // 正確答案
                    let correct = element["正確答案"].split(",");
                    correct.forEach((element) => {
                      q.correct.push(q.options[element - 1]);
                    });
                    questGroup.questData.MCQ.push(q); // 將題目存入questData
                  } else if (element["正確答案"] === "O" || element["正確答案"] === "X") {
                    // 回傳題組類型錯誤，停止作業
                    res.json({
                      code: 400,
                      msg: ["題組類型錯誤，是否為學科？"],
                    });
                  } else {
                    // 都不是的話，回傳錯誤，停止作業
                    res.json({
                      code: 400,
                      msg: ["題型錯誤，或選項異常！"],
                    });
                  }
                });

                // 處理「準則」
              } else if (questGroup.type === "學科") {
                // 取得excel資料轉換成JSON格式
                const excelToJSON = [];
                worksheet.eachRow((row, rowNumber) => {
                  if (rowNumber === 1 || rowNumber === 2) return; // 跳過Excel的第一、二行
                  // 將每一行的資料轉換成JSON格式
                  const rowJson = {};
                  row.eachCell((cell, colNumber) => {
                    rowJson[worksheet.getRow(2).getCell(colNumber).value] = cell.value;
                  });
                  // 將每一行的資料存入excelToJSON
                  excelToJSON.push(rowJson);
                });
                // 將JSON格式轉換成題目格式
                excelToJSON.forEach((element) => {
                  // 處理「是非題」
                  if (element["正確答案"] === "O" || element["正確答案"] === "X") {
                    let q = {
                      QID: "",
                      content: "",
                      correct: "",
                    };
                    questGroup.questNum.TFQ++; // 是非題數量+1
                    questGroup.familiarity.TFQ.push(0); // 是非題熟悉度初始化
                    q.QID = questGroup.QGID + "_0_" + element["項次"]; // 題目ID
                    q.content = element["題目"]; // 題目內容
                    // 正確答案
                    q.correct = element["正確答案"];
                    questGroup.questData.TFQ.push(q); // 將題目存入questData

                    // 處理「單選題」
                  } else if (typeof element["正確答案"] === "number") {
                    let q = {
                      QID: "",
                      content: "",
                      options: [],
                      correct: "",
                    };
                    questGroup.questNum.SCQ++; // 單選題數量+1
                    questGroup.familiarity.SCQ.push(0); // 單選題熟悉度初始化
                    q.QID = questGroup.QGID + "_1_" + element["項次"]; // 題目ID
                    q.content = element["題目"]; // 題目內容
                    // 鍵值長度有幾個，原本有項次、正確答案、題目，所以要減3，剩下的就是選項長度
                    let keyLength = Object.keys(element).length - 3;
                    // 題目選項，將選項存入options
                    for (let i = 1; i <= keyLength; i++) {
                      q.options.push(element["選項" + i]);
                    }
                    q.correct = q.options[element["正確答案"] - 1]; // 正確答案
                    questGroup.questData.SCQ.push(q); // 將題目存入questData

                    // 處理「多選題」
                  } else if (typeof element["正確答案"] === "string" && element["正確答案"] !== "O" && element["正確答案"] !== "X") {
                    let q = {
                      QID: "",
                      content: "",
                      options: [],
                      correct: [],
                    };
                    questGroup.questNum.MCQ++; // 多選題數量+1
                    questGroup.familiarity.MCQ.push(0); // 多選題熟悉度初始化
                    q.QID = questGroup.QGID + "_2_" + element["項次"]; // 題目ID
                    q.content = element["題目"]; // 題目內容
                    // // 鍵值長度有幾個，原本有項次、正確答案、題目，所以要減3，剩下的就是選項長度
                    let keyLength = Object.keys(element).length - 3;
                    // 題目選項，將選項存入options
                    for (let i = 1; i <= keyLength; i++) {
                      q.options.push(element["選項" + i]);
                    }
                    // 正確答案
                    let correct = element["正確答案"].split(",");
                    correct.forEach((element) => {
                      q.correct.push(q.options[element - 1]);
                    });
                    questGroup.questData.MCQ.push(q); // 將題目存入questData
                  } else {
                    // 都不是的話回傳錯誤，停止作業
                    res.json({
                      code: 400,
                      msg: ["題型錯誤"],
                    });
                  }
                });
              } else {
                // 準則、學科都不是的話回傳錯誤，停止作業
                res.json({
                  code: 400,
                  msg: ["題組類型錯誤"],
                });
              }
              // 儲存至資料庫
              if (sameName) {
                QuestionGroup.findOneAndUpdate({ subject: questGroup.subject }, questGroup)
                  .then((questGroup) => {
                    // 重置更新時間及統計題目數量
                    // 儲存容器
                    let updateInfo = {
                      updateTime: new Date(),
                      questionCount: {
                        standard: {
                          TFQ: 0,
                          SCQ: 0,
                          MCQ: 0,
                        },
                        subject: {
                          TFQ: 0,
                          SCQ: 0,
                          MCQ: 0,
                        },
                      },
                    };
                    // 計算資料庫學科TFQ、SCQ、MCQ與準則TFQ、SCQ、MCQ題目之總數
                    QuestionGroup.find()
                      .then((questionGroups) => {
                        questionGroups.forEach((element) => {
                          if (element.type === "準則") {
                            updateInfo.questionCount.standard.SCQ += element.questNum.SCQ;
                            updateInfo.questionCount.standard.MCQ += element.questNum.MCQ;
                          } else if (element.type === "學科") {
                            updateInfo.questionCount.subject.TFQ += element.questNum.TFQ;
                            updateInfo.questionCount.subject.SCQ += element.questNum.SCQ;
                            updateInfo.questionCount.subject.MCQ += element.questNum.MCQ;
                          }
                        });
                        // 更新資料庫
                        SystemInfo.updateMany({ updateInfo: { $exists: true } }, { updateInfo: updateInfo })
                          .then(() => {
                            res.status(200).json({
                              code: res.statusCode,
                              msg: ["更新成功"],
                            });
                          })
                          .catch((err) => {
                            return res.json({
                              code: 400,
                              msg: ["更新_資料庫_SystemInfo_重置更新題庫時間_發生錯誤！"],
                              sys: err,
                            });
                          });
                      })
                      .catch((err) => {
                        return res.json({
                          code: 400,
                          msg: ["搜尋_資料庫_QuestionGroup_統計題目總題數_發生錯誤！"],
                          sys: err,
                        });
                      });
                  })
                  .catch((err) => {
                    return res.json({
                      code: 400,
                      msg: ["尋找更新_資料庫_QuestionGroup_題組儲存_發生錯誤！"],
                      sys: err,
                    });
                  });
              } else {
                const newQuestionGroup = new QuestionGroup(questGroup);
                newQuestionGroup
                  .save()
                  .then(() => {
                    // 重置更新時間及統計題目數量
                    // 儲存容器
                    let updateInfo = {
                      updateTime: new Date(),
                      questionCount: {
                        standard: {
                          TFQ: 0,
                          SCQ: 0,
                          MCQ: 0,
                        },
                        subject: {
                          TFQ: 0,
                          SCQ: 0,
                          MCQ: 0,
                        },
                      },
                    };
                    // 計算資料庫學科TFQ、SCQ、MCQ與準則TFQ、SCQ、MCQ題目之總數
                    QuestionGroup.find()
                      .then((questionGroups) => {
                        questionGroups.forEach((element) => {
                          if (element.type === "準則") {
                            updateInfo.questionCount.standard.SCQ += element.questNum.SCQ;
                            updateInfo.questionCount.standard.MCQ += element.questNum.MCQ;
                          } else if (element.type === "學科") {
                            updateInfo.questionCount.subject.TFQ += element.questNum.TFQ;
                            updateInfo.questionCount.subject.SCQ += element.questNum.SCQ;
                            updateInfo.questionCount.subject.MCQ += element.questNum.MCQ;
                          }
                        });
                        // 更新資料庫
                        SystemInfo.updateMany({ updateInfo: { $exists: true } }, { updateInfo: updateInfo })
                          .then(() => {
                            res.status(200).json({
                              code: res.statusCode,
                              msg: ["上傳成功"],
                            });
                          })
                          .catch((err) => {
                            return res.json({
                              code: 400,
                              msg: ["更新_資料庫_SystemInfo_重置更新題庫時間_發生錯誤！"],
                              sys: err,
                            });
                          });
                      })
                      .catch((err) => {
                        return res.json({
                          code: 400,
                          msg: ["搜尋_資料庫_QuestionGroup_統計題目總題數_發生錯誤！"],
                          sys: err,
                        });
                      });
                  })
                  .catch((err) => {
                    return res.json({
                      code: 400,
                      msg: ["新增_資料庫_QuestionGroup_題組儲存_發生錯誤！"],
                      sys: err,
                    });
                  });
              }
            })
            .catch((err) => {
              return res.json({
                code: 400,
                msg: ["搜尋_資料庫_QuestionGroup_是否有相同題組名_發生錯誤！"],
                sys: err,
              });
            });
        })
        .catch((err) => {
          return res.json({
            code: 400,
            msg: ["讀取檔案_發生錯誤！"],
            sys: err,
          });
        });
    });
  }
});

// 路由：GET api/questionManage/getQuestionGroupList
// 用途：取得所有題組名稱清單OK
// 存取：private
router.get("/getQuestionGroupList", passport.authenticate("jwt", { session: false }), (req, res) => {
  //只取status為true的題組，內容只要QGID、subject、type
  QuestionGroup.find({ status: true }, { _id: 0, QGID: 1, subject: 1, type: 1 })
    .then((questionGroupList) => {
      res.json({
        code: 200,
        data: questionGroupList,
      });
    })
    .catch((err) => {
      res.json({
        code: 400,
        msg: [err],
      });
    });
});

// 路由：GET api/questionManage/getQuestionGroups
// 用途：取得所有題組OK
// 存取：private
router.get("/getQuestionGroups", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin" && req.user.ident !== "User") {
    return res.json({
      code: 403, // 403沒有權限
      msg: "非會員無法取得所有題組",
    });
  } else {
    QuestionGroup.find()
      .then((questionGroups) => {
        res.json({
          code: 200,
          data: questionGroups,
        });
      })
      .catch((err) => {
        res.json({
          code: 400,
          msg: [err],
        });
      });
  }
});

// 路由：GET api/questionManage/getQuestionGroup
// 用途：取得指定題組
// 存取：private
router.get("/getQuestionGroup", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.status(403).json({
      code: res.statusCode, // 403沒有權限
      msg: "非管理員無法取得所有題組",
    });
  } else {
    const questionGroupID = req.body.questionGroupID;
    QuestionGroup.find({ questionGroupID: questionGroupID })
      .then((questionGroup) => {
        res.status(200).json({
          code: res.statusCode,
          Data: questionGroup,
        });
      })
      .catch((err) => {
        res.status(400).json({
          code: res.statusCode,
          msg: err,
        });
      });
  }
});

// 路由：POST api/questionManage/modifyQuestionGroup
// 用途：修改題組(目前只有修改題組狀態)OK
// 存取：private
router.post("/modifyQuestionGroup", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.json({
      code: 403, // 403沒有權限
      msg: ["非管理員無法取得使用者資料"],
      sys: "",
    });
  } else {
    // 依據QGID更新該物件
    QuestionGroup.findOneAndUpdate({ QGID: req.body.QGID }, req.body)
      .then((questionGroup) => {
        return res.json({
          code: 200,
          msg: ["修改題組成功"],
        });
      })
      .catch((err) => {
        return res.json({
          code: 400,
          msg: [err],
        });
      });
  }
});

// 路由：POST api/questionManage/deleteQuestionGroup
// 用途：刪除題組OK
// 存取：private
router.post("/deleteQuestionGroup", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.json({
      code: 403, // 403沒有權限
      msg: ["非管理員無法取得使用者資料"],
      sys: "",
    });
  } else {
    // 依據QGID刪除該物件
    QuestionGroup.findOneAndDelete({ QGID: req.body.QGID })
      .then(() => {
        // 刪除public/questionDB/下的檔案
        fs.unlinkSync(__dirname + "/../../public/questionDB/" + req.body.subject + ".xlsx");
        return res.json({
          code: 200,
          msg: ["刪除題組成功"],
        });
      })
      .catch((err) => {
        return res.json({
          code: 400,
          msg: ["尋找刪除_資料庫_QuestionGroup_刪除題組_發生錯誤！"],
          sys: err,
        });
      });
  }
});

// 路由：GET api/questionManage/getUpdateTime
// 用途：取得題組更新時間OK
// 存取：private
router.get("/getUpdateTime", passport.authenticate("jwt", { session: false }), (req, res) => {
  // 取得資料庫中的更新時間
  SystemInfo.find({ updateInfo: { $exists: true } })
    .then((updateTime) => {
      res.json({
        code: 200,
        msg: ["取得更新時間成功"],
        data: updateTime[0].updateInfo.updateTime,
      });
    })
    .catch((err) => {
      res.json({
        code: 400,
        msg: [err],
      });
    });
});

module.exports = router;
