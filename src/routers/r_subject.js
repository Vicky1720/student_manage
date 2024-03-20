const express = require("express");
const { body, validationResult } = require("express-validator");

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
];

// Validation middleware for POST and PUT requests
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

Subject.get("/", getSubject);
Subject.get("/:id", getSubjectById);
Subject.post("/", isValidate, validate, insertSubject);
Subject.put("/:id", isValidate, validate, updateSubject);
Subject.delete("/:id", deleteSubject);

module.exports = Subject;
