import React from "react";

const QuizQuestion = ({ question }) => {
  return (
    <div className="flex justify-center items-center text-white bg-primary border-2 border-primary rounded-md p-4 h-32 overflow-auto">
      <p>{question?.description}</p>
    </div>
  );
};

export default QuizQuestion;
