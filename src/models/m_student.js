const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  enrollement_number: {
    type: Number,
    required: true,
  },

  student_name: {
    type: String,
    required: true,
  },

  contact_no: {
    type: String,
  },

  gender: {
    type: String,
  },

  address: {
    type: String,
  },

  email_id: {
    type: String,
    required: true,
  },
});

const student = new mongoose.model("student", studentSchema);

module.exports = student;
