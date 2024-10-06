const express = require("express");
const { getHomepage } = require("../controllers/homeController");
const { getQuizPage } = require("../controllers/quizController");
const { getQuestionPage } = require("../controllers/questionController");

const router = express.Router();

router.get("/", getHomepage);
router.get("/quiz", getQuizPage);
router.get("/question", getQuestionPage);

module.exports = router;
