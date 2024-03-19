const express = require("express");
const { body } = require("express-validator");

const {
  getResult,
  getResultById,
  insertResult,
  updateResult,
  deleteResult,
} = require("../controller/result");

const Result = express.Router();
const isValidate = [
  body("exam_id").notEmpty().withMessage("Please Enter The Exam Id"),
  body("student_id").notEmpty().withMessage("Please Enter The Student Id"),
  body("subject_id").notEmpty().withMessage("Please Enter The Subject Id"),
  body("obtain_marks").notEmpty().withMessage("Please Enter The Obtain Markes"),
];

Result.get("/", getResult);
Result.get("/:id", getResultById);
Result.post("/", isValidate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  insertResult(req, res);
});
Result.put("/:id", updateResult);
Result.delete("/:id", deleteResult);

module.exports = Result;
