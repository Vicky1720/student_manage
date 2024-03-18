const express = require("express");
const index = express();

index.use("/student", require("./r_student"));

module.exports = index;
