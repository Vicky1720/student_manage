const subject = require("../models/m_subject");

const getSubject = async (req, res) => {
  try {
    const sub_data = await subject.find();
    return res.status(200).json(sub_data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSubjectById = async (req, res) => {
  try {
    const sub_data = await subject.findById(req.params.id);
    res.status(200).json(sub_data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const insertSubject = async (req, res) => {
  try {
    const insertData = new subject(req.body);
    await insertData.save();
    return res.status(200).json("Subject Inserted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateSubject = async (req, res) => {
  try {
    await subject.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json("Subject Updated Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSubject = async (req, res) => {
  try {
    await subject.deleteOne({ _id: req.params.id });
    res.status(200).json("Subject Deleted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSubject,
  getSubjectById,
  insertSubject,
  updateSubject,
  deleteSubject,
};
