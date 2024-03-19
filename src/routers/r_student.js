const express = require("express");
const { body } = require("express-validator");

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
    .withMessage("Please Enter The Enrollment Number"),
  body("student_name").notEmpty().withMessage("Please Enter The Student Name"),
  body("contact_no").notEmpty().withMessage("Please Enter The Contact No"),
  body("gender").notEmpty().withMessage("Please Enter The Gender"),
  body("address").notEmpty().withMessage("Please Enter The Address"),
  body("email_id").notEmpty().withMessage("Please Enter The Email-Id"),
];

student.get("/", getStudent);
student.get("/:id", getStudentById);
student.post("/", isValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  insertStudent(req, res);
});
student.put("/:id", updateStudent);
student.delete("/:id", deleteStudent);

module.exports = student;
