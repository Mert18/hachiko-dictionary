import React from "react";
import QuizQuestionChoicesChoice from "./QuizQuestionChoicesChoice";

const QuizQuestionChoices = ({ choices, handleAnswerQuestion }) => {
  return (
    <div className="flex flex-wrap">
      {choices?.map((choice, index) => {
        return (
          <QuizQuestionChoicesChoice
            key={choice}
            choice={choice}
            handleAnswerQuestion={handleAnswerQuestion}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default QuizQuestionChoices;
