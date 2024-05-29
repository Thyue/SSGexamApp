const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 建立 帳戶 模型
const UserSchema = new Schema({
  studentID: {
    type: Number,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ident: {
    type: String,
    required: true,
  },
  exam_exp: {
    type: Object,
    required: true,
    // 階段測驗預估分數
    score_std: {
      type: Number,
      required: true,
    },
    score_sub: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
});

module.exports = User = mongoose.model("users", UserSchema);
