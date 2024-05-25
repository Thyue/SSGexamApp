const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 建立 討論區 模型
const DiscussListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = DiscussList = mongoose.model("discussList", DiscussListSchema);
