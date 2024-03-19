const express = require("express");
const { body } = require("express-validator");

const {
  getExam,
  getExamById,
  insertExam,
  updateExam,
  deleteExam,
} = require("../controller/exam");


const Exam = express.Router();

const isValidate = [
  body("exam_title").notEmpty().withMessage("Please Enter The Exam Title"),
  body("student_id").notEmpty().withMessage("Please Enter The Student Id"),
  body("subject_id").notEmpty().withMessage("Please Enter The Subject Id"),
  body("total_marks").notEmpty().withMessage("Please Enter The Total Markes"),
];

Exam.get("/", getExam);
Exam.get("/:id", getExamById);
Exam.post("/", isValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  insertExam(req, res);
});
Exam.put("/:id", updateExam);
Exam.delete("/:id", deleteExam);

module.exports = Exam;
