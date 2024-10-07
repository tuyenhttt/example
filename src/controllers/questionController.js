// const getQuestionPage = (req, res) => {
//   res.render("question.ejs");
// };

// module.exports = {
//   getQuestionPage,
// };

const Question = require("../models/questionModel");

// Render the question management page
const getQuestionPage = (req, res) => {
  res.render("question.ejs");
};

// Get all questions for the API
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single question by ID
const getQuestionById = async (req, res) => {
  const questionId = req.params.id; // Get the ID from the request parameters
  try {
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).send("Question not found");
    }
    res.render("questionDetail.ejs", { question });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

// Create a new question
const createQuestion = async (req, res) => {
  const { text, options, correctAnswer } = req.body;
  const question = new Question({ text, options, correctAnswer });

  try {
    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a question by ID
const updateQuestion = async (req, res) => {
  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedQuestion)
      return res.status(404).json({ message: "Question not found" });
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a question by ID
const deleteQuestion = async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion)
      return res.status(404).json({ message: "Question not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Render the edit question page
const getEditQuestionPage = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).render("404"); // Render a 404 page if not found
    res.render("editQuestion.ejs", { question });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Render the create question page
const getCreateQuestionPage = (req, res) => {
  res.render("createQuestion.ejs");
};

// Export the controller functions
module.exports = {
  getQuestionPage,
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getEditQuestionPage,
  getCreateQuestionPage,
};
