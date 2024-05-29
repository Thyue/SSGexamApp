// 留言板功能
const express = require("express");
const router = express.Router();
const passport = require("passport");

const DiscussList = require("../../models/DiscussList");

// 路由：GET api/discussion/test
// 用途：返回的請求的json數據
// 存取：public
router.get("/test", (req, res) =>
  res.json({
    msg: "留言板功能運作中",
  })
);

// 路由：GET api/discussion/getDiscussList
// 用途：取得留言列表OK
// 存取：public
router.get("/getDiscussList", (req, res) => {
  DiscussList.find()
    .sort({ date: -1 })
    .then((discuss) => {
      res.json({
        code: 200,
        data: discuss,
      });
    })
    .catch((err) => {
      res.json({
        code: 400,
        msg: [err],
      });
    });
});

// 路由：POST api/discussion/add
// 用途：新增留言OK
// 存取：public
router.post("/add", passport.authenticate("jwt", { session: false }), (req, res) => {
  const newDiscussList = new DiscussList({
    name: req.user.name,
    content: req.body.content,
  });
  // 存入資料庫並維持100筆資料
  DiscussList.find()
    .sort({ date: 1 })
    .then((discuss) => {
      const logLimit = 100;
      if (discuss.length >= logLimit) {
        DiscussList.deleteOne({ _id: discuss[0]._id })
          .then((discuss) => {
            // 新增留言
            newDiscussList
              .save()
              .then((discuss) => {
                return res.json({
                  code: 200,
                  msg: "新增留言成功！",
                  data: discuss,
                });
              })
              .catch((err) => {
                return res.json({
                  code: 400,
                  msg: "留言存入資料庫發生錯誤!",
                  sys: err,
                });
              });
          })
          .catch((err) => {
            return res.json({
              code: 400,
              msg: "維持留言數，刪除留言資料庫發生錯誤!",
              sys: err,
            });
          });
      } else {
        newDiscussList
          .save()
          .then((discuss) => {
            res.json({
              code: 200,
              msg: "新增留言成功！",
              data: discuss,
            });
          })
          .catch((err) => {
            return res.json({
              code: 400,
              msg: "留言存入資料庫發生錯誤!",
              sys: err,
            });
          });
      }
    })
    .catch((err) => {
      return res.json({
        code: 400,
        msg: "查詢資料庫留言發生錯誤!",
        sys: err,
      });
    });
});

// 路由：POST api/discussion/resetDiscussList
// 用途：重置留言列表
// 存取：private
router.post("/resetDiscussList", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.ident !== "Admin") {
    return res.status(400).json({
      code: res.statusCode,
      msg: "非管理員無法重置留言列表！",
    });
  } else {
    DiscussList.deleteMany()
      .then((discuss) => {
        res.json({
          code: res.statusCode,
          msg: "重置留言列表成功！",
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

module.exports = router;
