import React from "react";

const QuizQuestionChoicesChoice = ({ choice, handleAnswerQuestion, index }) => {
  const marginStyle = index % 2 === 0 ? "pr-1 w-1/2" : "pl-1 w-1/2";
  return (
    <div className={marginStyle}>
      <button
        className="text-primary bg-white border border-red-lighter p-2 w-full mt-2 h-14 hover:bg-red hover:text-white transition-all rounded-md"
        onClick={() => {
          handleAnswerQuestion(choice);
        }}
      >
        {choice}
      </button>
    </div>
  );
};

export default QuizQuestionChoicesChoice;
