import axiosInstance from "@/lib/axiosInstance";

export const getProfileQuizInfo = async (setQuizInfo) => {
  axiosInstance.get("/api/v1/quiz/my-quizzes").then((res) => {
    setQuizInfo(res.data.data);
  });
};
