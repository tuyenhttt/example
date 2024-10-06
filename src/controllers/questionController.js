const getQuestionPage = (req, res) => {
  res.render("question.ejs");
};

module.exports = {
  getQuestionPage,
};
