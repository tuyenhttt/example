// const express = require("express");
// const { getHomepage } = require("../controllers/homeController");
// const { getQuizPage } = require("../controllers/quizController");
// const { getQuestionPage } = require("../controllers/questionController");

// const router = express.Router();

// router.get("/", getHomepage);
// router.get("/quiz", getQuizPage);
// router.get("/question", getQuestionPage);

// module.exports = router;

const express = require("express");
const { getHomepage } = require("../controllers/homeController");
const {
  getQuizPage,
  //   getAllQuizzes,
  //   createQuiz,
  //   updateQuiz,
  //   deleteQuiz,
  //   getQuizById,
  //   getCreateQuizPage,
  //   getEditQuizPage,
} = require("../controllers/quizController");
const {
  getQuestionPage,
  //   getAllQuestions,
  //   createQuestion,
  //   updateQuestion,
  //   deleteQuestion,
  getQuestionById,
  //   getEditQuestionPage,
  //   getCreateQuestionPage,
} = require("../controllers/questionController");

const router = express.Router();

// Home route
router.get("/", getHomepage);

// Quiz routes
router.get("/quiz", getQuizPage);
// router.get("/quizzes", getAllQuizzes);
// router.get("/quiz/:id", getQuizById);
// router.post("/quiz", createQuiz);
// router.put("/quiz/:id", updateQuiz);
// router.delete("/quiz/:id", deleteQuiz);
// router.get("/quiz/new", getCreateQuizPage);
// router.get("/quiz/edit/:id", getEditQuizPage);

// Question routes
// router.get("/question", getQuestionPage);
// router.get("/questions", getAllQuestions);
// router.get("/questions/:id", getQuestionById);
// router.post("/questions", createQuestion);
// router.put("/questions/:id", updateQuestion);
// router.delete("/questions/:id", deleteQuestion);
// router.get("/question/new", getCreateQuestionPage);
// router.get("/question/edit/:id", getEditQuestionPage);

router.get("/question", getQuestionPage);
router.get("/question/:id", getQuestionById);

module.exports = router;
