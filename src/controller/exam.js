const exam = require("../models/m_exam");

const getExam = async (req, res) => {
  try {
    const exam_data = await exam.find();
    return res.status(200).json(exam_data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExamById = async (req, res) => {
  try {
    const exam_data = await student.findById(req.params.id);
    res.status(200).json(exam_data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const insertExam = async (req, res) => {
  try {
    const insertData = new exam(req.body);
    await insertData.save();
    return res.status(200).json("Exam Inserted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExam = async (req, res) => {
  try {
    await exam.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json("Exam Updated Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExam = async (req, res) => {
  try {
    await exam.deleteOne({ _id: req.params.id });
    res.status(200).json("Exam Deleted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getExam,
  getExamById,
  insertExam,
  updateExam,
  deleteExam,
};
