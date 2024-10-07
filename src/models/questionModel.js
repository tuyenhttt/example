const mongoose = require("mongoose");

// Define the Question schema
const questionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true, // Removes whitespace from the start and end of the string
    },
    options: {
      type: [String], // Array of strings for the options
      required: true,
    },
    correctAnswer: {
      type: String, // Store the correct answer
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically create createdAt and updatedAt fields
  }
);

// Create and export the Question model
const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
