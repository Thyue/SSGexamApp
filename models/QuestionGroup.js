const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 建立 題組 模型
const QuestionGroupSchema = new Schema({
  QGID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  questNum: {
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
  correctNum: {
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
  familiarity: {
    type: Object,
    required: true,
    TFQ: {
      type: Array,
      required: true,
    },
    SCQ: {
      type: Array,
      required: true,
    },
    MCQ: {
      type: Array,
      required: true,
    },
  },
  questData: {
    type: Object,
    required: true,
    TFQ: {
      type: Array,
      required: true,
    },
    SCQ: {
      type: Array,
      required: true,
    },
    MCQ: {
      type: Array,
      required: true,
    },
  },
});

module.exports = QuestionGroup = mongoose.model("questionBank", QuestionGroupSchema);
