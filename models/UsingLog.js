const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 建立 使用者紀錄 模型
const UsingLogSchema = new Schema({
  time: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = UsingLog = mongoose.model('usingLog', UsingLogSchema);
