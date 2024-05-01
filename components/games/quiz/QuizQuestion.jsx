import React from "react";

const QuizQuestion = ({ question }) => {
  return (
    <div className="flex justify-center items-center text-white bg-red p-4 h-32 overflow-auto rounded-md">
      <p>{question?.description}</p>
    </div>
  );
};

export default QuizQuestion;
