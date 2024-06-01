// 題庫考試功能
const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../../models/User");
const QuestionGroup = require("../../models/QuestionGroup");
const SystemInfo = require("../../models/SystemInfo");
const UsingLog = require("../../models/UsingLog");

// 路由：GET api/questionExam/test
// 用途：返回的請求的json數據
// 存取：public
router.get("/test", (req, res) =>
  res.json({
    msg: "題庫考試功能運作中",
  })
);

// 路由：GET api/questionExam/getQuestionGroupsList
// 用途：取得所有題組清單
// 存取：private
router.get("/getQuestionGroupsList", passport.authenticate("jwt", { session: false }), (req, res) => {
  QuestionGroup.find({ status: true }, { _id: 0, __v: 0, status: 0, TFQ: 0, SCQ: 0, MCQ: 0 })
    .sort({ date: -1 })
    .then((questionGroups) => {
      res.json({
        code: res.statusCode,
        data: questionGroups,
      });
    })
    .catch((err) => {
      res.status(400).json({
        code: res.statusCode,
        msg: err,
      });
    });
});

// 路由 POST api/questionExam/productExam
// 用途：依照用戶產生的考試資料OK
// 存取：private
router.post("/productExam", passport.authenticate("jwt", { session: false }), (req, res) => {
  const name = req.user.name;
  const questionGroupID = req.body.questionGroupID;
  const questionGroupName = req.body.qusetionGroupName;
  if (req.body.examMode === "弱點測驗") {
    // 取得用戶的ExamExp資料
    User.findOne({ studentID: req.user.studentID })
      .then((user) => {
        const examExpData = user.exam_exp;
        // 尋找examExpData.data中的QGID，如果沒有回傳沒有的questionGroupName陣列
        let non_questionGroupList = [];
        questionGroupID.forEach((QGID) => {
          examExpData.data.forEach((item) => {
            console.log("使用者題庫ID：" + item.QGID);
            console.log("測驗選擇之ID：" + QGID);
            if (item.QGID !== QGID) {
              non_questionGroupList.push(false);
            } else {
              non_questionGroupList.push(true);
            }
          });
        });
        console.log("比對結果");
        console.log(non_questionGroupList);
        // 將non_questionGroupList中為false，對應questionGroupName資料，回傳給前
        let non_questionGroup = [];
        for (let i = 0; i < non_questionGroupList.length; i++) {
          if (!non_questionGroupList[i]) {
            non_questionGroup.push(questionGroupName[i]);
          }
        }
        if (non_questionGroup.length !== 0) {
          let msg = ["不符合題目產出條件！", "未測驗題目既有："];
          msg = msg.concat(non_questionGroup);
          res.json({
            code: 460,
            msg: msg,
            sys: "",
          });
        } else {
          // 依照QGID找到對應的題組資料
          QuestionGroup.find({ QGID: { $in: questionGroupID } }, { _id: 0, __v: 0, status: 0, subject: 0, questNum: 0 })
            .then((questionGroups) => {
              let examData = {
                TFQ: [],
                SCQ: [],
                MCQ: [],
              };
              questionGroupID.forEach((QGID) => {
                examExpData.data.forEach((item) => {
                  if (item.QGID === QGID) {
                    // 讀取item.questData.familiarity.TFQ小於3的index所對應item.questData.TFQ.QID
                    item.familiarity.TFQ.forEach((familiarity, index) => {
                      if (familiarity < 3) {
                        // 尋找questionGroups，將符合item.questData.TFQ[index].QID之資料放入examData.TFQ
                        questionGroups.forEach((questionGroup) => {
                          questionGroup.questData.TFQ.forEach((TFQ) => {
                            if (TFQ.QID === item.questData.TFQ[index].QID) {
                              examData.TFQ.push(TFQ);
                            }
                          });
                        });
                      }
                    });
                    item.familiarity.SCQ.forEach((familiarity, index) => {
                      if (familiarity < 3) {
                        // 尋找questionGroups，將符合item.questData.SCQ[index].QID之資料放入examData.SCQ
                        questionGroups.forEach((questionGroup) => {
                          questionGroup.questData.SCQ.forEach((SCQ) => {
                            if (SCQ.QID === item.questData.SCQ[index].QID) {
                              examData.SCQ.push(SCQ);
                            }
                          });
                        });
                      }
                    });
                    item.familiarity.MCQ.forEach((familiarity, index) => {
                      if (familiarity < 3) {
                        // 尋找questionGroups，將符合item.questData.MCQ[index].QID之資料放入examData.MCQ
                        questionGroups.forEach((questionGroup) => {
                          questionGroup.questData.MCQ.forEach((MCQ) => {
                            if (MCQ.QID === item.questData.MCQ[index].QID) {
                              examData.MCQ.push(MCQ);
                            }
                          });
                        });
                      }
                    });
                  }
                });
              });
              // 題目隨機排序
              examData.TFQ.sort(() => Math.random() - 0.5);
              examData.SCQ.sort(() => Math.random() - 0.5);
              examData.MCQ.sort(() => Math.random() - 0.5);
              // 取出10題
              examData.TFQ = examData.TFQ.slice(0, 10);
              examData.SCQ = examData.SCQ.slice(0, 10);
              examData.MCQ = examData.MCQ.slice(0, 10);
              // 如果TFQ、SCQ、MCQ題目皆為0，回傳錯誤訊息
              if (examData.TFQ.length === 0 && examData.SCQ.length === 0 && examData.MCQ.length === 0) {
                return res.json({
                  code: 461,
                  msg: ["該科目你已經很完美了！"],
                  sys: "",
                });
              } else {
                // 新增伺服器紀錄
                const logRecordText = ["歷史總能記取教訓，" + name + "！", name + "再次發起了進攻", "革命烈士，" + name + "！"];
                // 隨機選擇一句話
                let logRecord = logRecordText[Math.floor(Math.random() * logRecordText.length)];
                // 推送伺服器紀錄
                const now = new Date();
                const newUsingLog = new UsingLog({
                  time: now,
                  content: logRecord,
                });
                newUsingLog
                  .save()
                  .then(() => {
                    console.log("記錄了使用者行為！");
                    return res.json({
                      code: 200,
                      msg: "產生考試資料",
                      data: examData,
                    });
                  })
                  .catch((err) => {
                    return res.json({
                      code: 400,
                      msg: ["insert_DB_UsingLog_記錄使用者行為_發生錯誤！"],
                      sys: err,
                    });
                  });
              }
            })
            .catch((err) => {
              return res.json({
                code: 400,
                msg: "查詢資料庫之題庫資料發生錯誤!",
                sys: err,
              });
            });
        }
      })
      .catch((err) => {
        return res.json({
          code: 400,
          msg: "查詢資料庫之用戶資料發生錯誤!",
          msg: "查詢_資料庫_Users_取得ExamExp_發生錯誤！",
          sys: err,
        });
      });
  } else {
    // K書模式、模擬測驗
    QuestionGroup.find({ QGID: { $in: questionGroupID } }, { _id: 0, __v: 0, status: 0, subject: 0, questNum: 0 })
      .then((questionGroups) => {
        let examData = {
          TFQ: [],
          SCQ: [],
          MCQ: [],
        };
        questionGroups.forEach((questionGroup) => {
          if (questionGroup.questData.TFQ.length > 0) {
            questionGroup.questData.TFQ.forEach((TFQ) => {
              examData.TFQ.push(TFQ);
            });
          }
          if (questionGroup.questData.SCQ.length > 0) {
            questionGroup.questData.SCQ.forEach((SCQ) => {
              examData.SCQ.push(SCQ);
            });
          }
          if (questionGroup.questData.MCQ.length > 0) {
            questionGroup.questData.MCQ.forEach((MCQ) => {
              examData.MCQ.push(MCQ);
            });
          }
        });
        // 題目隨機排序
        examData.TFQ.sort(() => Math.random() - 0.5);
        examData.SCQ.sort(() => Math.random() - 0.5);
        examData.MCQ.sort(() => Math.random() - 0.5);
        if (req.body.examMode === "K書模式") {
          if (req.body.isRandom) {
            // 回傳選項「隨機排序」之考試資料
            // 將「單選題」選項打亂順序
            examData.SCQ.forEach((SCQ) => {
              // 打亂選項順序
              SCQ.options.sort(() => Math.random() - 0.5);
              // 找出correct的內容與options的內容符合的index並將結果放入原本的物件中
              SCQ.correctIndex = SCQ.options.findIndex((option) => option === SCQ.correct) + 1;
            });
            // 將「多選題」選項打亂順序
            examData.MCQ.forEach((MCQ) => {
              // 打亂選項順序
              MCQ.options.sort(() => Math.random() - 0.5);
              // 找出correct陣列的內容與options陣列的內容符合的所有index
              let correctIndex = [];
              MCQ.correct.forEach((correct) => {
                correctIndex.push(MCQ.options.findIndex((option) => option === correct) + 1);
              });
              //將結果由小排到大並放入原本的物件中
              MCQ.correctIndex = correctIndex.sort((a, b) => a - b);
            });
          } else {
            // 回傳選項「不隨機排序」之考試資料
            // 將「單選題」選項的順序數紀錄
            examData.SCQ.forEach((SCQ) => {
              // 找出correct的內容與options的內容符合的index並將結果放入原本的物件中
              SCQ.correctIndex = SCQ.options.findIndex((option) => option === SCQ.correct) + 1;
            });
            // 將「多選題」選項的順序數紀錄
            examData.MCQ.forEach((MCQ) => {
              // 找出correct陣列的內容與options陣列的內容符合的所有index
              let correctIndex = [];
              MCQ.correct.forEach((correct) => {
                correctIndex.push(MCQ.options.findIndex((option) => option === correct) + 1);
              });
              //將結果放入原本的物件中
              MCQ.correctIndex = correctIndex;
            });
          }

          // 新增伺服器紀錄
          let logRecordText = "";
          let logRecord = "";
          logRecordText = [name + "偷偷念了書", name + "染上了學習拉！", name + "正在用功", "太努力了，" + name + "！"];
          // 隨機選擇一句話
          logRecord = logRecordText[Math.floor(Math.random() * logRecordText.length)];
          // 推送伺服器紀錄
          const now = new Date();
          const newUsingLog = new UsingLog({
            time: now,
            content: logRecord,
          });
          newUsingLog
            .save()
            .then(() => console.log("記錄了使用者行為！"))
            .catch((err) => console.log(err));
        } else if (req.body.examMode === "模擬測驗") {
          // 模擬考試考題處理
          // 將「單選題」選項打亂順序
          examData.SCQ.forEach((SCQ) => {
            SCQ.options.sort(() => Math.random() - 0.5);
          });
          // 將「多選題」選項打亂順序
          examData.MCQ.forEach((MCQ) => {
            MCQ.options.sort(() => Math.random() - 0.5);
          });
          if (questionGroups[0].type === "準則") {
            // 處理準則模擬考題目格式
            // 隨機從SCQ選擇20題
            examData.SCQ = examData.SCQ.slice(0, 20);
            // 隨機從MCQ選擇40題
            examData.MCQ = examData.MCQ.slice(0, 20);
          } else {
            // 處理學科模擬考題目格式
            // 隨機從TFQ選擇20題
            examData.TFQ = examData.TFQ.slice(0, 20);
            // 隨機從SCQ選擇20題
            examData.SCQ = examData.SCQ.slice(0, 20);
            // 隨機從MCQ選擇30題
            examData.MCQ = examData.MCQ.slice(0, 30);
          }
          // 新增伺服器紀錄
          let logRecordText = "";
          let logRecord = "";
          logRecordText = [name + "進行了一次測驗~", name + "對題目發起了進攻！", "攻擊前進！" + name];
          // 隨機選擇一句話
          logRecord = logRecordText[Math.floor(Math.random() * logRecordText.length)];
          // 推送伺服器紀錄
          const now = new Date();
          const newUsingLog = new UsingLog({
            time: now,
            content: logRecord,
          });
          newUsingLog
            .save()
            .then(() => console.log("記錄了使用者行為！"))
            .catch((err) => console.log(err));
        }
        res.json({
          msg: "產生考試資料",
          data: examData,
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

// 路由 POST api/questionExam/saveExamResult
// 用途：儲存考試結果OK
// 存取：private
router.post("/saveExamResult", passport.authenticate("jwt", { session: false }), (req, res) => {
  const examResultData = req.body;
  // 檢查題組語跟新題組
  for (let i = 0; i < examResultData.exam_QGID_list.length; i++) {
    let targetQGID = examResultData.exam_QGID_list[i];
    // 利用examResultData內之題組清單去的QGID，找尋資料庫的題組資料
    QuestionGroup.findOne({ QGID: targetQGID }, { _id: 0, __v: 0 })
      .then((questionGroup) => {
        let QG_Data = questionGroup;
        // 提取用戶的ExamExp資料
        User.findOne({ studentID: req.user.studentID })
          .then((user) => {
            let examExpData = user.exam_exp;
            // 處理examExpData
            let targetExamExpData = {};
            let isExist = false;
            // 處理沒有examExpData.data狀況
            if (!Object.prototype.hasOwnProperty.call(examExpData, "data")) examExpData.data = [];
            // 歷遍examExpData.data，找尋是否有相同的QGID
            examExpData.data.forEach((item) => {
              if (item.QGID === targetQGID) {
                targetExamExpData = item;
                isExist = true;
              }
            });
            if (!isExist) {
              // 如果沒有相同的QGID就新增物件
              targetExamExpData = {
                QGID: QG_Data.QGID,
                type: QG_Data.type,
                subject: QG_Data.subject,
                status: QG_Data.status,
                questNum: {
                  TFQ: QG_Data.questNum.TFQ,
                  SCQ: QG_Data.questNum.SCQ,
                  MCQ: QG_Data.questNum.MCQ,
                },
                correctNum: {
                  TFQ: 0,
                  SCQ: 0,
                  MCQ: 0,
                },
                familiarity: {
                  TFQ: QG_Data.familiarity.TFQ,
                  SCQ: QG_Data.familiarity.SCQ,
                  MCQ: QG_Data.familiarity.MCQ,
                },
                questData: {
                  TFQ: QG_Data.questData.TFQ,
                  SCQ: QG_Data.questData.SCQ,
                  MCQ: QG_Data.questData.MCQ,
                },
              };
            } else {
              // 如果有相同的QGID就更新物件
              targetExamExpData.questData = QG_Data.questData;
            }
            // 計算個題目的熟悉度familiarity
            // 分解examResultData內的QID，並暫時存入暫時變數
            let tempData = [];
            let tempQID = [];
            examResultData.TFQ.forEach((TFQ) => {
              tempQID = TFQ.QID.split("_");
              tempQID.push(TFQ.weight);
              tempData.push(tempQID);
            });
            examResultData.SCQ.forEach((SCQ) => {
              tempQID = SCQ.QID.split("_");
              tempQID.push(SCQ.weight);
              tempData.push(tempQID);
            });
            examResultData.MCQ.forEach((MCQ) => {
              tempQID = MCQ.QID.split("_");
              tempQID.push(MCQ.weight);
              tempData.push(tempQID);
            });
            // 計算熟悉度
            for (let i = 0; i < tempData.length; i++) {
              // tempData[i][0]在examExp找到與之相同的QGID
              // tempData[i][1]的值：0為TDQ，1為SCQ，2為MCQ。
              // tempData[i][2]的值為index
              // tempData[i][3]的值為weight寫入
              if (tempData[i][0] === targetExamExpData.QGID) {
                let index = tempData[i][2] - 1;
                if (tempData[i][1] === "0") {
                  if (targetExamExpData.familiarity.TFQ[index] === undefined) {
                    targetExamExpData.familiarity.TFQ[index] = 0;
                  }
                  targetExamExpData.familiarity.TFQ[index] += tempData[i][3];
                  if (targetExamExpData.familiarity.TFQ[index] > 5) {
                    targetExamExpData.familiarity.TFQ[index] = 5;
                  } else if (targetExamExpData.familiarity.TFQ[index] < -2) {
                    targetExamExpData.familiarity.TFQ[index] = -2;
                  }
                  targetExamExpData.familiarity.TFQ[index] = Math.round(targetExamExpData.familiarity.TFQ[index] * 10) / 10;
                } else if (tempData[i][1] === "1") {
                  if (targetExamExpData.familiarity.SCQ[index] === undefined) {
                    targetExamExpData.familiarity.SCQ[index] = 0;
                  }
                  targetExamExpData.familiarity.SCQ[index] += tempData[i][3];
                  if (targetExamExpData.familiarity.SCQ[index] > 5) {
                    targetExamExpData.familiarity.SCQ[index] = 5;
                  } else if (targetExamExpData.familiarity.SCQ[index] < -2) {
                    targetExamExpData.familiarity.SCQ[index] = -2;
                  }
                  targetExamExpData.familiarity.SCQ[index] = Math.round(targetExamExpData.familiarity.SCQ[index] * 10) / 10;
                } else if (tempData[i][1] === "2") {
                  if (targetExamExpData.familiarity.MCQ[index] === undefined) {
                    targetExamExpData.familiarity.MCQ[index] = 0;
                  }
                  targetExamExpData.familiarity.MCQ[index] += tempData[i][3];
                  if (targetExamExpData.familiarity.MCQ[index] > 5) {
                    targetExamExpData.familiarity.MCQ[index] = 5;
                  } else if (targetExamExpData.familiarity.MCQ[index] < -2) {
                    targetExamExpData.familiarity.MCQ[index] = -2;
                  }
                  targetExamExpData.familiarity.MCQ[index] = Math.round(targetExamExpData.familiarity.MCQ[index] * 10) / 10;
                }
              }
            }
            // 計算熟悉題目數，參數為：熟悉度0~1.5為0.4題、1.5~2.9為0.6題、大於3以上為1題
            let statTFQ = 0;
            targetExamExpData.familiarity.TFQ.forEach((familiarity) => {
              if (familiarity > 2.9) {
                statTFQ += 1;
              } else if (familiarity > 1.5 && familiarity <= 2.9) {
                statTFQ += 0.6;
              } else if (familiarity > 0 && familiarity <= 1.5) {
                statTFQ += 0.4;
              }
            });
            targetExamExpData.correctNum.TFQ = Math.round(statTFQ * 10) / 10;
            let statSCQ = 0;
            targetExamExpData.familiarity.SCQ.forEach((familiarity) => {
              if (familiarity > 2.9) {
                statSCQ += 1;
              } else if (familiarity > 1.5 && familiarity <= 2.9) {
                statSCQ += 0.6;
              } else if (familiarity > 0 && familiarity <= 1.5) {
                statSCQ += 0.4;
              }
            });
            targetExamExpData.correctNum.SCQ = Math.round(statSCQ * 10) / 10;
            let statMCQ = 0;
            targetExamExpData.familiarity.MCQ.forEach((familiarity) => {
              if (familiarity > 2.9) {
                statMCQ += 1;
              } else if (familiarity > 1.5 && familiarity <= 2.9) {
                statMCQ += 0.6;
              } else if (familiarity > 0 && familiarity <= 1.5) {
                statMCQ += 0.4;
              }
            });
            targetExamExpData.correctNum.MCQ = Math.round(statMCQ * 10) / 10;
            // 放入examExpData
            if (!isExist) {
              examExpData.data.push(targetExamExpData);
            } else {
              examExpData.data.forEach((item) => {
                if (item.QGID === targetExamExpData.QGID) item = targetExamExpData;
              });
            }
            // 更新至資料庫
            User.findOneAndUpdate({ studentID: req.user.studentID }, { exam_exp: examExpData })
              .then(() => {
                // 計算預估分數
                // 至資料庫SystemInfo.updateInfo.questionCount取得總題數
                SystemInfo.findOne({}, { _id: 0, __v: 0, countDown: 0, systemNotice: 0 })
                  .then((systemInfo) => {
                    User.findOne({ studentID: req.user.studentID })
                      .then((user) => {
                        let score_std = 0;
                        let score_sub = 0;
                        // 總題數處理
                        const std_SCQ_Num = systemInfo.updateInfo.questionCount.standard.SCQ;
                        const std_MCQ_Num = systemInfo.updateInfo.questionCount.standard.MCQ;
                        const sub_TFQ_Num = systemInfo.updateInfo.questionCount.subject.TFQ;
                        const sub_SCQ_Num = systemInfo.updateInfo.questionCount.subject.SCQ;
                        const sub_MCQ_Num = systemInfo.updateInfo.questionCount.subject.MCQ;
                        // // 總熟悉題數處理
                        let std_SCQ_CorrectNum = 0;
                        let std_MCQ_CorrectNum = 0;
                        let sub_TFQ_CorrectNum = 0;
                        let sub_SCQ_CorrectNum = 0;
                        let sub_MCQ_CorrectNum = 0;
                        user.exam_exp.data.forEach((item) => {
                          if (item.type === "準則") {
                            std_SCQ_CorrectNum += item.correctNum.SCQ;
                            std_MCQ_CorrectNum += item.correctNum.MCQ;
                          } else {
                            sub_TFQ_CorrectNum += item.correctNum.TFQ;
                            sub_SCQ_CorrectNum += item.correctNum.SCQ;
                            sub_MCQ_CorrectNum += item.correctNum.MCQ;
                          }
                        });
                        console.log("準則單選總" + std_SCQ_Num);
                        console.log("準則多選總" + std_MCQ_Num);
                        console.log("學科是非總" + sub_TFQ_Num);
                        console.log("學科單選總" + sub_SCQ_Num);
                        console.log("學科多選總" + sub_MCQ_Num);
                        console.log("準則單選熟" + std_SCQ_CorrectNum);
                        console.log("準則多選熟" + std_MCQ_CorrectNum);
                        console.log("學科是非熟" + sub_TFQ_CorrectNum);
                        console.log("學科單選熟" + sub_SCQ_CorrectNum);
                        console.log("學科多選熟" + sub_MCQ_CorrectNum);

                        // 計算預估分數
                        // 準則：20/(單選總題數)*(單選熟悉題數)+80/(多選總題數)*(多選熟悉題數)
                        if (std_SCQ_Num === 0 || std_MCQ_Num === 0) {
                          score_std = 0;
                        } else {
                          score_std = (20 / std_SCQ_Num) * std_SCQ_CorrectNum + (80 / std_MCQ_Num) * std_MCQ_CorrectNum;
                          score_std = Math.round(score_std * 10) / 10;
                        }
                        // 學科：20/(是非總題數)*(是非熟悉題數)+20/(單選總題數)*(單選熟悉題數)+60/(多選總題數)*(多選熟悉題數)
                        if (sub_TFQ_Num === 0 || sub_SCQ_Num === 0 || sub_MCQ_Num === 0) {
                          score_sub = 0;
                        } else {
                          score_sub =
                            (20 / sub_TFQ_Num) * sub_TFQ_CorrectNum + (20 / sub_SCQ_Num) * sub_SCQ_CorrectNum + (60 / sub_MCQ_Num) * sub_MCQ_CorrectNum;
                          score_sub = Math.round(score_sub * 10) / 10;
                        }
                        console.log("準則" + score_sub);
                        console.log("學科" + score_sub);
                        // 更新至資料庫
                        User.findOneAndUpdate({ studentID: req.user.studentID }, { exam_exp: { score_std, score_sub, data: examExpData.data } })
                          .then(() => {
                            res.json({
                              code: 200,
                              msg: "考試結果已儲存！",
                            });
                          })
                          .catch((err) => {
                            res.json({
                              code: 400,
                              msg: ["更新儲存至資料庫異常", err],
                            });
                          });
                      })
                      .catch((err) => {
                        res.json({
                          code: 400,
                          msg: [err],
                        });
                      });
                  })
                  .catch((err) => {
                    res.json({
                      code: 400,
                      msg: ["取得總題數異常", err],
                    });
                  });
              })
              .catch((err) => {
                res.json({
                  code: 400,
                  msg: ["更新資料庫異常", err],
                });
              });
          })
          .catch((err) => {
            res.json({
              code: 400,
              msg: [err],
            });
          });
      })
      .catch((err) => {
        res.json({
          code: 400,
          msg: ["QGID尋找題組資料異常", err],
        });
      });
  }
});

module.exports = router;
