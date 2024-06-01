// 帳戶管理工具
const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../../models/User");

// 路由：GET api/accountManage/test
// 用途：返回的請求的json數據
// 存取：public
router.get("/test", (req, res) =>
  res.json({
    msg: "帳戶管理工具運作中",
  })
);
// 路由：GET api/accountManage/getUsers
// 用途：取得所有使用者資料OK
// 存取：private
router.get("/getUsers", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.json({
      code: 403, // 403沒有權限
      msg: ["非管理員無法取得所有使用者資料"],
      sys: "",
    });
  } else {
    // 除了密碼以外的所有使用者資料
    User.find({}, { _id: 0, password: 0 })
      .then((users) => {
        return res.json({
          code: 200,
          msg: "取得所有使用者資料",
          data: users,
        });
      })
      .catch((err) => {
        res.json({
          code: 400,
          msg: ["尋找_資料庫_Users_發生錯誤！"],
          sys: err,
        });
      });
  }
});

// 路由：GET api/accountManage/getUser
// 用途：取得指定使用者資料
// 存取：private
router.get("/getUser", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.status(403).json({
      code: res.statusCode, // 403沒有權限
      msg: "非管理員無法取得指定使用者資料",
    });
  } else {
    const studentID = req.body.studentID;
    User.findOne({ studentID: studentID })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            code: res.statusCode,
            msg: "找不到[學號" + studentID + "]的使用者資料",
          });
        } else {
          res.status(200).json({
            code: res.statusCode,
            msg: "取得[學號" + studentID + "]的使用者資料",
            data: user,
          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          code: res.statusCode,
          msg: err,
        });
      });
  }
});

// 路由：POST api/accountManage/modifyUser
// 用途：修改用戶(目前只修改身分)OK
// 存取：private
router.post("/modifyUser", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.json({
      code: 403, // 403沒有權限
      msg: ["非管理員無法取得使用者資料"],
      sys: "",
    });
  } else {
    // 依據StudentID更新該物件
    User.findOneAndUpdate({ studentID: req.body.studentID }, req.body)
      .then(() => {
        return res.json({
          code: 200,
          msg: ["已修改[學號" + req.body.studentID + "]的使用者資料！"],
        });
      })
      .catch((err) => {
        return res.json({
          code: 400,
          msg: ["修改_資料庫_Users_修改用戶參數_發生錯誤！"],
          sys: err,
        });
      });
  }
});

// 路由：POST api/accountManage/resetExamExp
// 用途：重置用戶學習紀錄OK
// 存取：private
router.post("/resetExamExp", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.json({
      code: 403, // 403沒有權限
      msg: ["非管理員無法取得使用者資料"],
      sys: "",
    });
  } else {
    User.findOneAndUpdate(
      { studentID: req.body.studentID },
      {
        exam_exp: {
          score_std: 0,
          score_sub: 0,
          data: {},
        },
      }
    )
      .then(() => {
        return res.json({
          code: 200,
          msg: ["已重置學習紀錄！"],
        });
      })
      .catch((err) => {
        return res.json({
          code: 400,
          msg: ["尋找更新_資料庫_Users_重置學習紀錄_發生錯誤！"],
          sys: err,
        });
      });
  }
});

// 路由：POST api/accountManage/deleteUser
// 用途：刪除指定帳戶OK
// 存取：private
router.post("/deleteUser", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.json({
      code: 403, // 403沒有權限
      msg: ["非管理員無法取得使用者資料"],
      sys: "",
    });
  } else {
    const studentID = req.body.studentID;
    User.findOneAndDelete({ studentID: studentID })
      .then(() => {
        return res.json({
          code: 200,
          msg: ["學號：" + studentID + "的帳戶刪除成功！"],
        });
      })
      .catch((err) => {
        return res.json({
          code: 400,
          msg: ["尋找更新_資料庫_Users_刪除用戶_發生錯誤！"],
          sys: err,
        });
      });
  }
});
module.exports = router;
