const express = require("express");
const index = express();

index.use("/student", require("./r_student"));
index.use("/Subject", require("./r_subject"));

module.exports = index;
