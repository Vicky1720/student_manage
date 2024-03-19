const express = require("express");
const { body } = require("express-validator");

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
e_student.post("/", isValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  insertEnroll_Student(req, res);
});
e_student.put("/:id", updateEnroll_Student);
e_student.delete("/:id", deleteEnroll_Student);

module.exports = e_student;
