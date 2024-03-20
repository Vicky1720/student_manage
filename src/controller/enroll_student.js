const e_Student = require("../models/m_enroll_student");
const logger = require("../controller/logger");
const { ObjectId } = require("mongodb");

const getEnroll_Student = async (req, res) => {
  try {
    const es_data = await e_Student.aggregate([
      {
        $lookup: {
          from: "students",
          localField: "student_id",
          foreignField: "_id",
          as: "student_info",
        },
      },
      {
        $lookup: {
          from: "subjects",
          localField: "subject_id",
          foreignField: "_id",
          as: "subject_info",
        },
      },
      {
        $unwind: "$student_info",
      },
      {
        $unwind: "$subject_info",
      },
      {
        $project: {
          _id: 0,
          student_name: "$student_info.student_name",
          enrollement_number: "$student_info.enrollement_number",
          email_id: "$student_info.email_id",
          subject_name: "$subject_info.subject_name",
        },
      },
    ]);

    logger.Loggers.info("successfully got list of enroll student");
    return res.status(200).json(es_data);
  } catch (error) {
    logger.Loggers.error("error finding for enroll student");
    res.status(500).json({ message: error.message });
  }
};

const getEnroll_StudentById = async (req, res) => {
  try {
    const Id = req?.params?.id;
    const es_data = await e_Student.aggregate([
      {
        $match: {
          _id: new ObjectId(Id),
        },
      },
      {
        $lookup: {
          from: "students",
          localField: "student_id",
          foreignField: "_id",
          as: "student_info",
        },
      },
      {
        $lookup: {
          from: "subjects",
          localField: "subject_id",
          foreignField: "_id",
          as: "subject_info",
        },
      },
      {
        $unwind: "$student_info",
      },
      {
        $unwind: "$subject_info",
      },
      {
        $project: {
          _id: 0,
          student_name: "$student_info.student_name",
          enrollement_number: "$student_info.enrollement_number",
          email_id: "$student_info.email_id",
          subject_name: "$subject_info.subject_name",
        },
      },
    ]);

    logger.Loggers.info("succssfully got list of enroll student");
    res.status(200).json(es_data[0]);
  } catch (error) {
    logger.Loggers.error("error finding for enroll student");
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
