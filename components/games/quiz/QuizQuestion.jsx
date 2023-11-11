import React from "react";

const QuizQuestion = ({ question }) => {
  return (
    <div className="text-primary border-2 border-primary rounded-md p-4">
      <p>{question?.description}</p>
    </div>
  );
};

export default QuizQuestion;
