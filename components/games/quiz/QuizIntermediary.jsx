import React from "react";

const QuizIntermediary = ({ handleCompleteQuiz, intermediateMessage }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="py-5 text-red">{intermediateMessage}</p>
      <button
        className="font-bold text-white bg-red text-sm py-2 px-4"
        onClick={() => handleCompleteQuiz()}
      >
        Complete the quiz
      </button>
    </div>
  );
};

export default QuizIntermediary;
