const exam = require("../models/m_exam");
const logger = require("../controller/logger");
const { ObjectId } = require("mongodb");

const getExam = async (req, res) => {
  try {
    const exam_data = await exam.aggregate([
      {
        $lookup: {
          from: "e_students",
          localField: "enroll_student_id",
          foreignField: "_id",
          as: "enroll_student",
        },
      },
      {
        $unwind: "$enroll_student",
      },
      {
        $lookup: {
          from: "students",
          localField: "enroll_student.student_id",
          foreignField: "_id",
          as: "student",
        },
      },
      {
        $lookup: {
          from: "subjects",
          localField: "enroll_student.subject_id",
          foreignField: "_id",
          as: "subject",
        },
      },
      {
        $unwind: "$student",
      },
      {
        $unwind: "$subject",
      },
      {
        $project: {
          _id: 0,
          exam_title: 1,
          student_name: "$student.student_name",
          enrollement_number: "$student.enrollement_number",
          subject_name: "$subject.subject_name",
          exam_date: {
            $dateToString: { format: "%Y-%m-%d", date: "$exam_date" },
          },
          total_marks: 1,
        },
      },
    ]);

    logger.Loggers.info("successfully got list of exams");
    return res.status(200).json(exam_data);
  } catch (error) {
    logger.Loggers.error("error finding exams");
    res.status(500).json({ message: error.message });
  }
};

const getExamById = async (req, res) => {
  try {
    const Id = req?.params?.id;
    const exam_data = await exam.aggregate([
      {
        $match: {
          _id: new ObjectId(Id),
        },
      },
      {
        $lookup: {
          from: "e_students",
          localField: "enroll_student_id",
          foreignField: "_id",
          as: "enroll_student",
        },
      },
      {
        $unwind: "$enroll_student",
      },
      {
        $lookup: {
          from: "students",
          localField: "enroll_student.student_id",
          foreignField: "_id",
          as: "student",
        },
      },
      {
        $lookup: {
          from: "subjects",
          localField: "enroll_student.subject_id",
          foreignField: "_id",
          as: "subject",
        },
      },
      {
        $unwind: "$student",
      },
      {
        $unwind: "$subject",
      },
      {
        $project: {
          _id: 0,
          exam_title: 1,
          student_name: "$student.student_name",
          enrollement_number: "$student.enrollement_number",
          subject_name: "$subject.subject_name",
          exam_date: {
            $dateToString: { format: "%Y-%m-%d", date: "$exam_date" },
          },
          total_marks: 1,
        },
      },
    ]);
    logger.Loggers.info("succssfully got list of exam");
    res.status(200).json(exam_data[0]);
  } catch (error) {
    logger.Loggers.error("error finding for exam");
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
