const express = require("express");

const {
  getStudent,
  getStudentById,
  insertStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/student");

const student = express.Router();

student.get("/", getStudent);
student.get("/:id", getStudentById);
student.post("/", insertStudent);
student.put("/:id", updateStudent);
student.delete("/:id", deleteStudent);

module.exports = student;
