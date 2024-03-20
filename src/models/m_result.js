const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  exam_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  obtain_marks: {
    type: Number,
  },
});

const result = new mongoose.model("result", resultSchema);

module.exports = result;
