const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  enrollement_number: {
    type: Number,
  },

  student_name: {
    type: String,
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
  },
});

const student = new mongoose.model("student", studentSchema);

module.exports = student;
