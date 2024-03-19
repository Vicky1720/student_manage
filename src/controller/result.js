const result = require("../models/m_result");

const getResult = async (req, res) => {
  try {
    const result_data = await result.find();
    logger.Loggers.info("succssfully got list of result");
    return res.status(200).json(result_data);
  } catch (error) {
    logger.Loggers.error("error finding for result");
    res.status(500).json({ message: error.message });
  }
};

const getResultById = async (req, res) => {
  try {
    const result_data = await result.findById(req.params.id);
    logger.Loggers.info("succssfully got list of result");
    res.status(200).json(result_data);
  } catch (error) {
    logger.Loggers.error("error finding for result");
    res.status(500).json({ message: error.message });
  }
};

const insertResult = async (req, res) => {
  try {
    const insertData = new result(req.body);
    await insertData.save();
    return res.status(200).json("Result Inserted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    await result.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json("Result Updated Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    await result.deleteOne({ _id: req.params.id });
    res.status(200).json("Result Deleted Successfully..!!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getResult,
  getResultById,
  insertResult,
  updateResult,
  deleteResult,
};
