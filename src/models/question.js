const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  questionText: String,
  options: [
    {
      text: String,
      isCorrect: Boolean,
    },
  ],
  quizId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Question", QuestionSchema);
