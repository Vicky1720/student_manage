const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  getEnroll_Student,
  getEnroll_StudentById,
  insertEnroll_Student,
  updateEnroll_Student,
  deleteEnroll_Student,
} = require("../controller/enroll_student");

const e_student = express.Router();
const isValidate = [
  body("student_id").notEmpty().withMessage("Please Enter The Student Id"),
  body("subject_id").notEmpty().withMessage("Please Enter The Subject Id"),
];

e_student.get("/", getEnroll_Student);
e_student.get("/:id", getEnroll_StudentById);

// Validation middleware for POST and PUT requests
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

e_student.post("/", isValidate, validate, insertEnroll_Student);
e_student.put("/:id", isValidate, validate, updateEnroll_Student);

e_student.delete("/:id", deleteEnroll_Student);

module.exports = e_student;
