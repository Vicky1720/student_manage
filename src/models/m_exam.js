const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  enroll_student_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  exam_title: {
    type: String,
    required: true,
  },

  exam_date: {
    type: Date,
    required: true,
  },

  total_marks: {
    type: Number,
  },
});

const exam = new mongoose.model("exam", examSchema);

module.exports = exam;
