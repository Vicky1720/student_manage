const e_Student = require("../models/m_enroll_student");

const getEnroll_Student = async (req, res) => {
  try {
    const es_data = await e_Student.find();
    return res.status(200).json(es_data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEnroll_StudentById = async (req, res) => {
  try {
    const es_data = await e_Student.findById(req.params.id);
    res.status(200).json(es_data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const insertEnroll_Student = async (req, res) => {
  try {
    const insertData = new e_Student(req.body);
    await insertData.save();
    return res.status(200).json("Enroll Student Inserted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEnroll_Student = async (req, res) => {
  try {
    await e_Student.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json("Enroll Student Updated Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEnroll_Student = async (req, res) => {
  try {
    await e_Student.deleteOne({ _id: req.params.id });
    res.status(200).json("Enroll Student Deleted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEnroll_Student,
  getEnroll_StudentById,
  insertEnroll_Student,
  updateEnroll_Student,
  deleteEnroll_Student,
};
