const API_BASE_URL = "https://nodejs-quizz-app-api.onrender.com";

// Helper function for making API requests
const apiRequest = async (endpoint, method = "GET", body = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export default {
  // Quizzes API
  getQuizzes: () => apiRequest("/quizzes"),
  getQuizById: (quizId) => apiRequest(`/quizzes/${quizId}`),
  createQuiz: (quizData) => apiRequest("/quizzes", "POST", quizData),
  updateQuiz: (quizId, quizData) =>
    apiRequest(`/quizzes/${quizId}`, "PUT", quizData),
  deleteQuiz: (quizId) => apiRequest(`/quizzes/${quizId}`, "DELETE"),

  // Questions API
  getQuestions: () => apiRequest("/questions"),
  getQuestionById: (questionId) => apiRequest(`/questions/${questionId}`),
  createQuestion: (questionData) =>
    apiRequest("/questions", "POST", questionData),
  updateQuestion: (questionId, questionData) =>
    apiRequest(`/questions/${questionId}`, "PUT", questionData),
  deleteQuestion: (questionId) =>
    apiRequest(`/questions/${questionId}`, "DELETE"),
};
