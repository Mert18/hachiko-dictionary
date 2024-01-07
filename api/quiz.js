import axiosInstance from "@/lib/axiosInstance";
import { QUIZ_QUESTION_COUNT } from "@/lib/constants";

export const fetchNewQuestions = async (setQuestions) => {
  await axiosInstance.get("/api/v1/quiz/generate/medium").then((res) => {
    setQuestions(res.data.data.questions);
  });
};

export const handleCompleteQuiz = (
  setGameState,
  correctAnswers,
  incorrectAnswers
) => {
  axiosInstance
    .post("/api/v1/quiz/complete", {
      correctAnswers: correctAnswers.length,
      incorrectAnswers: incorrectAnswers.length,
      notAnswered:
        QUIZ_QUESTION_COUNT - correctAnswers.length - incorrectAnswers.length,
      difficulty: "medium",
    })
    .then(() => {
      setGameState("result");
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message);
    });
};
