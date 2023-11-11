import React from "react";
import QuizQuestionChoicesChoice from "./QuizQuestionChoicesChoice";

const QuizQuestionChoices = ({ choices, handleAnswerQuestion }) => {
  return (
    <div className="flex flex-wrap">
      {choices?.map((choice) => {
        return (
          <QuizQuestionChoicesChoice
            key={choice}
            choice={choice}
            handleAnswerQuestion={handleAnswerQuestion}
          />
        );
      })}
    </div>
  );
};

export default QuizQuestionChoices;
