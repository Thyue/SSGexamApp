// 系統使用狀態紀錄工具
const express = require("express");
const router = express.Router();

const UsingLog = require("../../models/UsingLog");

// 路由：GET api/useingLogs/test
// 用途：返回的請求的json數據
// 存取：public
router.get("/test", (req, res) =>
  res.json({
    msg: "系統使用狀態紀錄工具運作中",
  })
);

// 路由:GET api/usingLogs/getLogs
// 用途:取得所有系統使用紀錄
// 存取:public
router.get("/getLogs", (req, res) => {
  // 不要__v欄位
  UsingLog.find({}, { __v: 0, _id: 0 }).then((logs) => {
    res.status(200).json({
      code: res.statusCode,
      msg: "已取得所有系統使用紀錄",
      data: logs,
    });
  });
});

module.exports = router;
