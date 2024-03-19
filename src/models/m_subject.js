const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject_name: {
    type: String,
    required: true,
  },
  student_id: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },
});

const subject = new mongoose.model("subject", subjectSchema);

module.exports = subject;
