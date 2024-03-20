const result = require("../models/m_result");
const logger = require("../controller/logger");
const { ObjectId } = require("mongodb");

const getResult = async (req, res) => {
  try {
    const result_data = await result.aggregate([
      {
        $lookup: {
          from: "exams",
          localField: "exam_id",
          foreignField: "_id",
          as: "exam_details",
        },
      },
      {
        $unwind: "$exam_details",
      },
      {
        $lookup: {
          from: "e_students",
          localField: "exam_details.enroll_student_id",
          foreignField: "_id",
          as: "enrollment_details",
        },
      },
      {
        $unwind: "$enrollment_details",
      },
      {
        $lookup: {
          from: "students",
          localField: "enrollment_details.student_id",
          foreignField: "_id",
          as: "student_details",
        },
      },
      {
        $unwind: "$student_details",
      },
      {
        $lookup: {
          from: "subjects",
          localField: "enrollment_details.subject_id",
          foreignField: "_id",
          as: "subject_details",
        },
      },
      {
        $unwind: "$subject_details",
      },
      {
        $project: {
          _id: 0,
          exam_title: "$exam_details.exam_title",
          exam_date: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$exam_details.exam_date",
            },
          },
          student_name: "$student_details.student_name",
          enrollment_number: "$student_details.enrollement_number",
          subject_name: "$subject_details.subject_name",
          obtain_marks: 1,
          total_marks: "$exam_details.total_marks",
        },
      },
    ]);

    logger.Loggers.info("Successfully got list of result");
    return res.status(200).json(result_data);
  } catch (error) {
    logger.Loggers.error("Error finding for result");
    res.status(500).json({ message: error.message });
  }
};

const getResultById = async (req, res) => {
  try {
    const Id = req?.params?.id;
    const result_data = await result.aggregate([
      {
        $match: {
          _id: new ObjectId(Id),
        },
      },
      {
        $lookup: {
          from: "exams",
          localField: "exam_id",
          foreignField: "_id",
          as: "exam_details",
        },
      },
      {
        $unwind: "$exam_details",
      },
      {
        $lookup: {
          from: "e_students",
          localField: "exam_details.enroll_student_id",
          foreignField: "_id",
          as: "enrollment_details",
        },
      },
      {
        $unwind: "$enrollment_details",
      },
      {
        $lookup: {
          from: "students",
          localField: "enrollment_details.student_id",
          foreignField: "_id",
          as: "student_details",
        },
      },
      {
        $unwind: "$student_details",
      },
      {
        $lookup: {
          from: "subjects",
          localField: "enrollment_details.subject_id",
          foreignField: "_id",
          as: "subject_details",
        },
      },
      {
        $unwind: "$subject_details",
      },
      {
        $project: {
          _id: 0,
          exam_title: "$exam_details.exam_title",
          exam_date: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$exam_details.exam_date",
            },
          },
          student_name: "$student_details.student_name",
          enrollment_number: "$student_details.enrollement_number",
          subject_name: "$subject_details.subject_name",
          obtain_marks: 1,
          total_marks: "$exam_details.total_marks",
        },
      },
    ]);
    logger.Loggers.info("succssfully got list of result");
    res.status(200).json(result_data[0]);
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
