const express = require("express");

const {
  getExam,
  getExamById,
  insertExam,
  updateExam,
  deleteExam,
} = require("../controller/exam");

const Exam = express.Router();

Exam.get("/", getExam);
Exam.get("/:id", getExamById);
Exam.post("/", insertExam);
Exam.put("/:id", updateExam);
Exam.delete("/:id", deleteExam);

module.exports = Exam;
