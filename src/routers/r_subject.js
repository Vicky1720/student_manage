const express = require("express");
const { body } = require("express-validator");

const {
  getSubject,
  getSubjectById,
  insertSubject,
  updateSubject,
  deleteSubject,
} = require("../controller/subject");

const Subject = express.Router();
const isValidate = [
  body("subject_name").notEmpty().withMessage("Please Enter The Subject Name"),
  body("student_id").notEmpty().withMessage("Please Enter The Student Id"),
];

Subject.get("/", getSubject);
Subject.get("/:id", getSubjectById);
Subject.post("/", isValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  insertSubject(req, res);
});
Subject.put("/:id", updateSubject);
Subject.delete("/:id", deleteSubject);

module.exports = Subject;
