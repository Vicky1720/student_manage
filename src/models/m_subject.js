const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject_name: {
    type: String,
  },
});

const subject = new mongoose.model("subject", subjectSchema);

module.exports = subject;
