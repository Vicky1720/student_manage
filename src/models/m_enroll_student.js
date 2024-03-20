const mongoose = require("mongoose");

const e_StudentSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  subject_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const e_Student = new mongoose.model("e_Student", e_StudentSchema);

module.exports = e_Student;
