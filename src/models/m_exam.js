const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  exam_title: {
    type: String,
    required: true,
  },

  student_id: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },

  subject_id: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },

  total_marks: {
    type: Number,
  },
});

const exam = new mongoose.model("exam", examSchema);

module.exports = exam;
