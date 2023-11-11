import axiosInstance from "@/lib/axiosInstance";

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
      difficulty: "medium",
    })
    .then(() => {
      setGameState("result");
    })
    .catch((err) => {
      toast.error(err?.response?.data?.message);
    });
};
