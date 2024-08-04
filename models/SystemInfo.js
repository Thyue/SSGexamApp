const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 建立 系統資訊參數 模型
const SystemInfoSchema = new Schema({
  // 倒數時間
  countDown: {
    type: Date,
    required: true,
  },
  // 題庫更新資訊
  updateInfo: {
    type: Object,
    required: true,
    // 題庫更新時間
    updateTime: {
      type: Date,
      required: true,
    },
    // 題目數量總統計
    questionCount: {
      type: Object,
      required: true,
      // 準則題目數量
      standard: {
        type: Object,
        required: true,
        TFQ: {
          type: Number,
          required: true,
        },
        SCQ: {
          type: Number,
          required: true,
        },
        MCQ: {
          type: Number,
          required: true,
        },
      },
      // 學科題目數量
      subject: {
        type: Object,
        required: true,
        TFQ: {
          type: Number,
          required: true,
        },
        SCQ: {
          type: Number,
          required: true,
        },
        MCQ: {
          type: Number,
          required: true,
        },
      },
    },
  },
});

module.exports = SystemInfo = mongoose.model("systemInfo", SystemInfoSchema);
