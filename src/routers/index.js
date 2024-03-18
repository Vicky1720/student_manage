const express = require("express");
const index = express();

index.use("/student", require("./r_student"));
index.use("/Subject", require("./r_subject"));
index.use("/enroll_student", require("./r_enroll_student"));
index.use("/exam", require("./r_exam"));
index.use("/result", require("./r_result"));

module.exports = index;
