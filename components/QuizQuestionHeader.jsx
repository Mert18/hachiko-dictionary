import React from "react";

const QuizQuestionHeader = ({ currentIndex, questionsCount }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <p className="text-primary font-bold text-lg">
        <span>{currentIndex + 1}</span> / <span>{questionsCount}</span>
      </p>
    </div>
  );
};

export default QuizQuestionHeader;
