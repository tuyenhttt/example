const getQuizPage = (req, res) => {
  res.render("quiz.ejs");
};

module.exports = {
  getQuizPage,
};
