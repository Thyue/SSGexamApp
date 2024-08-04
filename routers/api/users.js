// 帳戶操作
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const keys = require("../../config/keys");
const User = require("../../models/User");
const UsingLog = require("../../models/UsingLog");

// 路由：GET api/users/test
// 用途：返回的請求的json數據
// 存取：public
router.get("/test", (req, res) =>
  res.json({
    code: 200,
    msg: ["帳戶系統運作中"],
  })
);

// 路由：POST api/users/register
// 用途：註冊帳號OK
// 存取：public
router.post("/register", (req, res) => {
  // 查詢資料庫中是否有註冊過學號
  User.findOne({ studentID: req.body.studentID })
    .then((user) => {
      if (user) {
        return res.json({
          code: 400,
          msg: ["註冊失敗！", "學號重複申請，請洽管理員！"],
          sys: "",
        });
      } else {
        // 查詢資料庫中是否有註冊過帳號
        User.findOne({ account: req.body.account })
          .then((user) => {
            if (user) {
              return res.json({
                code: 400,
                msg: ["註冊失敗！", "帳號重複申請，請洽管理員！"],
                sys: "",
              });
            } else {
              // 註冊帳號
              const newUser = new User({
                studentID: parseInt(req.body.studentID, 10),
                name: req.body.name,
                account: req.body.account,
                password: req.body.password,
                ident: "Register",
                exam_exp: {
                  score_std: 0,
                  score_sub: 0,
                  data: {},
                },
              });
              // 實施密碼加密
              bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then((user) => {
                      res.status(200).json({
                        code: res.statusCode,
                        msg: ["註冊成功！", "告知管理員，並於1~3日工作天將審核身份。", "審核完畢後，即可登入。"],
                      });
                    })
                    .catch((err) => {
                      res.json({
                        code: 400,
                        msg: ["新增_資料庫_Users_註冊帳號_發生錯誤！"],
                        sys: err,
                      });
                    });
                });
              });
            }
          })
          .catch((err) => {
            return res.json({
              code: 400,
              msg: ["搜尋_資料庫_Users_是否有註冊過帳號_發生錯誤！"],
              sys: err,
            });
          });
      }
    })
    .catch((err) => {
      return res.json({
        code: 400,
        msg: ["搜尋_資料庫_Users_是否有註冊過學號_發生錯誤！"],
        sys: err,
      });
    });
});

// 路由：POST api/users/login
// 用途：登入帳號OK
// 存取：public
router.post("/login", (req, res) => {
  const account = req.body.account;
  const password = req.body.password;
  // 查詢資料庫 是否有此帳號
  User.findOne({ account })
    .then((user) => {
      if (!user) {
        return res.json({
          code: 404,
          msg: ["帳戶尚未註冊！"],
          sys: "",
        });
      }
      // 密碼驗證
      bcrypt
        .compare(password, user.password)
        .then((isMatch) => {
          // 密碼正確
          if (isMatch) {
            // 帳號是否被停用
            if (user.ident === "Stop") {
              res.json({
                code: 423, // 423正在訪問的資源被鎖定
                msg: ["帳戶已停用！"],
                sys: "",
              });
            } else if (user.ident === "Register") {
              res.json({
                code: 423, // 423正在訪問的資源被鎖定
                msg: ["帳號未開通，請洽管理員！"],
                sys: "",
              });
            } else {
              const rule = {
                id: user.id,
                studentID: user.studentID,
                name: user.name,
                account: user.account,
                ident: user.ident,
              };
              const LOGIN_HOW_LONG = 3600 * 4; // 4小時後過期
              const REMEMBERME_HOW_LONG = 1000 * 60 * 60 * 24 * 90; // 90天後過期
              // jwt.sign("規則", "加密名字", "過期時間", "箭頭函數")
              jwt.sign(rule, keys.secretOrKey, { expiresIn: LOGIN_HOW_LONG }, (err, token) => {
                if (err) throw err;
                // 寫入session
                if (req.body.rememberMe) {
                  req.session.cookie.maxAge = REMEMBERME_HOW_LONG; // 設定cookie過期時間
                  req.session.account = account;
                  req.session.password = password;
                }
                res.json({
                  code: 200,
                  msg: ["登入成功！"],
                  token: "Bearer " + token,
                });
              });
              // 新增伺服器紀錄
              const logRecordText = [
                "耶！您成功了，" + user.name + "！",
                user.name + "在這裡。",
                "歡迎" + user.name + "。打聲招呼吧！",
                user.name + "剛剛出現了！",
                user.name + "剛剛著陸下來。",
                user.name + "跳進了伺服器。",
              ];
              // 隨機選擇一句話
              const logRecord = logRecordText[Math.floor(Math.random() * logRecordText.length)];
              // 推送伺服器紀錄
              const now = new Date();
              const newUsingLog = new UsingLog({
                time: now,
                content: logRecord,
              });
              // 存入資料庫並維持100筆資料
              const logLimit = 100;
              UsingLog.find()
                .sort({ time: 1 })
                .then((log) => {
                  if (log.length >= logLimit) {
                    // 計算超過幾筆
                    const over = log.length - logLimit;
                    UsingLog.deleteMany({ _id: { $in: log.slice(0, over).map((log) => log._id) } })
                      .then(() => {
                        newUsingLog
                          .save()
                          .then(() => console.log(logRecord))
                          .catch((err) => {
                            return res.json({
                              code: 400,
                              msg: ["新增_資料庫_UsingLog_新增系統紀錄_發生錯誤！"],
                              sys: err,
                            });
                          });
                      })
                      .catch((err) => {
                        return res.json({
                          code: 400,
                          msg: ["刪除_資料庫_UsingLog_維持系統紀錄筆數_發生錯誤！"],
                          sys: err,
                        });
                      });
                  } else {
                    newUsingLog
                      .save()
                      .then(() => console.log(logRecord))
                      .catch((err) => {
                        return res.json({
                          code: 400,
                          msg: ["新增_資料庫_UsingLog_新增系統紀錄_發生錯誤！"],
                          sys: err,
                        });
                      });
                  }
                })
                .catch((err) => {
                  return res.json({
                    code: 400,
                    msg: ["尋找_資料庫_UsingLog_取得系統紀錄_發生錯誤！"],
                    sys: err,
                  });
                });
            }
          } else {
            return res.json({
              code: 400,
              msg: ["密碼錯誤！"],
              sys: "",
            });
          }
        })
        .catch((err) => {
          return res.json({
            code: 400,
            msg: ["加密_發生錯誤！"],
            sys: err,
          });
        });
    })
    .catch((err) => {
      return res.json({
        code: 400,
        msg: ["搜尋_資料庫_Users_查用戶是否註冊_發生錯誤！"],
        sys: err,
      });
    });
});

// 路由：GET api/users/getSession
// 用途：返回的請求的json數據
// 存取：public
router.get("/getSession", (req, res) => {
  res.json({
    code: 200,
    data: {
      account: req.session.account,
      password: req.session.password,
    },
  });
});

// 路由：GET api/users/current
// 用途：運用token取得當前用戶資訊
// 存取：private
router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({
    code: 200,
    data: {
      studentID: req.user.studentID,
      name: req.user.name,
      account: req.user.account,
      ident: req.user.ident,
      exam_exp: req.user.exam_exp,
    },
  });
});

// 路由：GET api/users/predictedScore
// 用途：用戶查詢預測分數OK
// 存取：private
router.get("/predictedScore", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findOne({ studentID: req.user.studentID })
    .then((user) => {
      return res.json({
        code: 200,
        data: {
          score_std: user.exam_exp.score_std,
          score_sub: user.exam_exp.score_sub,
        },
      });
    })
    .catch((err) => {
      res.status(400).json({
        code: res.statusCode,
        msg: err,
      });
    });
});

// 路由 GET api/users/learningRecord
// 用途：用戶查詢學習紀錄OK
// 存取：private
router.get("/learningRecord", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findOne({ studentID: req.user.studentID })
    .then((user) => {
      res.status(200).json({
        code: res.statusCode,
        data: user.exam_exp.data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        code: res.statusCode,
        msg: err,
      });
    });
});

// 路由：GET api/users/weakness
// 用途：用戶查詢弱點分析
// 存取：private
router.get("/weakness", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findOne({ studentID: req.user.studentID })
    .then((user) => {
      res.status(200).json({
        code: res.statusCode,
        data: user.exam_exp,
      });
    })
    .catch((err) => {
      res.status(400).json({
        code: res.statusCode,
        msg: err,
      });
    });
});

// 路由：POST api/users/modify
// 用途：用戶自行修改用戶姓名、帳號-[當前版本未上線]
// 存取：private
// router.post('/modify', passport.authenticate('jwt', { session: false }), (req, res) => {
//   User.findOneAndUpdate(
//     { studentID: req.user.studentID },
//     {
//       name: req.body.name,
//       account: req.body.account,
//     }
//   )
//     .then(() => {
//       res.status(200).json({
//         code: res.statusCode,
//         msg: '修改成功！',
//       });
//     })
//     .catch((err) => {
//       res.status(400).json({
//         code: res.statusCode,
//         msg: err,
//       });
//     });
// });

// 路由：POST api/users/resetExamexp
// 用途：用戶自行重置學習紀錄-[當前版本未上線]
// 存取：private
// router.post('/resetExamexp', passport.authenticate('jwt', { session: false }), (req, res) => {
//   User.findOneAndUpdate(
//     { studentID: req.user.studentID },
//     {
//       exam_exp: {
//         state: false,
//         data: {},
//       },
//     }
//   )
//     .then(() => {
//       res.status(200).json({
//         code: res.statusCode,
//         msg: '重置成功！',
//       });
//     })
//     .catch((err) => {
//       res.status(400).json({
//         code: res.statusCode,
//         msg: err,
//       });
//     });
// });

// 路由：POST api/users/modifyPassword
// 用途：修改密碼-[當前版本未上線]
// 存取：private
// router.post('/modifyPassword', passport.authenticate('jwt', { session: false }), (req, res) => {
//   const password = req.body.password;
//   // 密碼加密
//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//       if (err) throw err;
//       User.findOneAndUpdate({ studentID: req.user.studentID }, { password: hash }).then(() => {
//         res.json({
//           success: true,
//         });
//       });
//     });
//   });
// });

module.exports = router;
