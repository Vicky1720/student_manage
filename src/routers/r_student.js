const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  getStudent,
  getStudentById,
  insertStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/student");

const student = express.Router();
const isValidate = [
  body("enrollement_number")
    .notEmpty()
    .withMessage("Please Enter The Enrollement Number"),
  body("student_name").notEmpty().withMessage("Please Enter The Student Name"),
  body("contact_no").notEmpty().withMessage("Please Enter The Contact No"),
  body("gender").notEmpty().withMessage("Please Enter The Gender"),
  body("address").notEmpty().withMessage("Please Enter The Address"),
  body("email_id").notEmpty().withMessage("Please Enter The Email-Id"),
];

// Validation middleware for POST and PUT requests
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

student.get("/", getStudent);
student.get("/:id", getStudentById);
student.post("/", isValidate, validate, insertStudent);
student.put("/:id", isValidate, validate, updateStudent);
student.delete("/:id", deleteStudent);

module.exports = student;
