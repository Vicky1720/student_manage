const student = require("../models/m_student");
const logger = require("../controller/logger");

const getStudent = async (req, res) => {
  try {
    const s_data = await student.find();
    logger.Loggers.info("succssfully got list of student");
    return res.status(200).json(s_data);
  } catch (error) {
    logger.Loggers.error("error finding for student");
    res.status(500).json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const s_data = await student.findById(req.params.id);
    logger.Loggers.info("succssfully got list of student");
    res.status(200).json(s_data);
  } catch (error) {
    logger.Loggers.error("error finding for student");
    res.status(500).json({ message: error.message });
  }
};

const insertStudent = async (req, res) => {
  try {
    const insertData = new student(req.body);
    await insertData.save();
    return res.status(200).json("Student Inserted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    await student.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json("Student Updated Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await student.deleteOne({ _id: req.params.id });
    res.status(200).json("Student Deleted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStudent,
  getStudentById,
  insertStudent,
  updateStudent,
  deleteStudent,
};
