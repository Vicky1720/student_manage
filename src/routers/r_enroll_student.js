const express = require("express");

const {
  getEnroll_Student,
  getEnroll_StudentById,
  insertEnroll_Student,
  updateEnroll_Student,
  deleteEnroll_Student,
} = require("../controller/enroll_student");

const e_student = express.Router();

e_student.get("/", getEnroll_Student);
e_student.get("/:id", getEnroll_StudentById);
e_student.post("/", insertEnroll_Student);
e_student.put("/:id", updateEnroll_Student);
e_student.delete("/:id", deleteEnroll_Student);

module.exports = e_student;
