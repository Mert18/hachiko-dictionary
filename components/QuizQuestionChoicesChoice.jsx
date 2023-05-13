import React from "react";

const QuizQuestionChoicesChoice = ({ choice, handleAnswerQuestion }) => {
  return (
    <button
      className="text-white bg-primary p-2 w-full mt-2 rounded-md h-14 hover:bg-primary-100"
      onClick={() => {
        handleAnswerQuestion(choice);
      }}
    >
      {choice}
    </button>
  );
};

export default QuizQuestionChoicesChoice;
