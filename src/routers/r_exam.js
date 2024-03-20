const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  getExam,
  getExamById,
  insertExam,
  updateExam,
  deleteExam,
} = require("../controller/exam");

const Exam = express.Router();

const isValidate = [
  body("enroll_student_id")
    .notEmpty()
    .withMessage("Please Enter The Enroll Student Id "),
  body("exam_title").notEmpty().withMessage("Please Enter The Exam Title"),
  body("exam_date").notEmpty().withMessage("Please Enter The Exam Date"),
  body("total_marks").notEmpty().withMessage("Please Enter The Total Marks"),
];

// Validation middleware for POST and PUT requests
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

Exam.get("/", getExam);
Exam.get("/:id", getExamById);
Exam.post("/", isValidate, validate, insertExam);
Exam.put("/:id", isValidate, validate, updateExam);
Exam.delete("/:id", deleteExam);

module.exports = Exam;
