const express = require("express");
const { body, validationResult } = require("express-validator");

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
  body("obtain_marks").notEmpty().withMessage("Please Enter The Obtain Marks"),
];

// Validation middleware for POST and PUT requests
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

Result.get("/", getResult);
Result.get("/:id", getResultById);
Result.post("/", isValidate, validate, insertResult);
Result.put("/:id", isValidate, validate, updateResult);
Result.delete("/:id", deleteResult);

module.exports = Result;
