const express = require("express");

const {
  getSubject,
  getSubjectById,
  insertSubject,
  updateSubject,
  deleteSubject,
} = require("../controller/subject");

const Subject = express.Router();

Subject.get("/", getSubject);
Subject.get("/:id", getSubjectById);
Subject.post("/", insertSubject);
Subject.put("/:id", updateSubject);
Subject.delete("/:id", deleteSubject);

module.exports = Subject;
