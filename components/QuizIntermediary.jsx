import React from "react";

const QuizIntermediary = ({ handleCompleteQuiz }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="py-5">There are no more questions.</p>
      <button
        className="font-bold text-white bg-primary rounded-md text-sm py-2 px-4"
        onClick={handleCompleteQuiz}
      >
        Complete the quiz
      </button>
    </div>
  );
};

export default QuizIntermediary;
