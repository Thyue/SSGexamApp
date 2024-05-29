// 系統管理工具
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

const keys = require("../../config/keys");
const User = require("../../models/User");
const QuestionGroup = require("../../models/QuestionGroup");
const SystemInfo = require("../../models/SystemInfo");
const DiscussList = require("../../models/DiscussList");
const UsingLog = require("../../models/UsingLog");

// 路由：GET api/systemManage/test
// 用途：返回的請求的json數據
// 存取：public
router.get("/test", (req, res) =>
  res.json({
    msg: "系統管理工具運作中",
  })
);

// 路由 GET api/systemManage/getSystemNotice
// 用途: 取得系統公告OK
// 存取: public
router.get("/getSystemNotice", (req, res) => {
  SystemInfo.find({ systemNotice: { $exists: true } })
    .then((notice) => {
      res.json({
        code: 200,
        data: notice[0].systemNotice,
      });
    })
    .catch((err) => {
      res.json({
        code: 400,
        msg: [err],
      });
    });
});

// 路由 GET api/systemManage/getCountDown
// 用途: 取得階段考倒數時間OK
// 存取: public
router.get("/getCountDown", (req, res) => {
  SystemInfo.find({ countDown: { $exists: true } })
    .then((time) => {
      res.json({
        code: 200,
        time: time[0].countDown,
      });
    })
    .catch((err) => {
      res.json({
        code: 400,
        msg: [err],
      });
    });
});

// 路由: POST api/systemManage/updateCountDown
// 用途: 設置階段考倒數時間OK
// 存取: private
router.post("/updateCountDown", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.status(403).json({
      code: res.statusCode, // 403沒有權限
      msg: "非管理員無法取得所有使用者資料",
    });
  } else {
    // 更新倒數時間
    SystemInfo.findOneAndUpdate({}, { $set: { countDown: req.body.countDown } }, { new: true })
      .then((time) => {
        res.json({
          code: 200,
          time: time.countDown,
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

// 路由: POST api/systemManage/resetDatabase
// 用途: 資料庫初始化OK
// 存取: private
router.post("/resetDatabase", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.json({
      code: 403, // 403沒有權限
      msg: ["非管理員無法重置資料庫"],
    });
  } else {
    // 清空所有使用者資料
    User.deleteMany()
      .then(() => {
        // 註冊root帳號
        const newUser = new User({
          studentID: 0,
          name: "副排長",
          account: "root",
          password: keys.rootPassword,
          ident: "Admin",
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
              .then((user) => console.log("1、使用者資料已初始化！"))
              .catch((err) => console.log(err));
          });
        });
      })
      .catch((err) => console.log(err));
    // 清空題庫資料
    QuestionGroup.deleteMany()
      .then(() => {
        // 把public/questionDB資料夾內清空
        const fs = require("fs");
        const path = require("path");
        const dir = path.join(__dirname, "../../public/questionDB");
        fs.readdir(dir, (err, files) => {
          if (err) throw err;
          for (const file of files) {
            fs.unlink(path.join(dir, file), (err) => {
              if (err) throw err;
            });
          }
        });
        console.log("2、已清空題庫資料！");
      })
      .catch((err) => console.log(err));
    // 清空討論區資料
    DiscussList.deleteMany()
      .then(() => console.log("3、已清空討論區資料！"))
      .catch((err) => console.log(err));
    // 清空系統使用紀錄
    UsingLog.deleteMany()
      .then(() => {
        const now = new Date();
        const newUsingLog = new UsingLog({
          time: now,
          content: "系通資料庫已初始化！",
        });
        newUsingLog
          .save()
          .then((usingLog) => console.log("4、已重置使用者紀錄！"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    // 初始化倒數計時日及更新時間資料
    SystemInfo.deleteMany()
      .then(() => {
        const now = new Date();
        const newSystemInfo = new SystemInfo({
          countDown: now,
          updateInfo: {
            updateTime: now,
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
          },
          systemNotice: [{ title: "系統公告", content: "系統資料庫已重置！", time: now }],
        });
        newSystemInfo
          .save()
          .then((usingLog) => console.log("5、已重置倒數時間、題庫更新時間、系統公告！"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    return res.json({
      code: 200,
      msg: "系通資料庫已初始化！",
    });
  }
});

module.exports = router;
