const express = require("express");

const {
  getResult,
  getResultById,
  insertResult,
  updateResult,
  deleteResult,
} = require("../controller/result");

const Result = express.Router();

Result.get("/", getResult);
Result.get("/:id", getResultById);
Result.post("/", insertResult);
Result.put("/:id", updateResult);
Result.delete("/:id", deleteResult);

module.exports = Result;
