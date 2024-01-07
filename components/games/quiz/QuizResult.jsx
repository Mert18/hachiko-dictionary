import React from "react";
import QuizResultAnswers from "./QuizResultAnswers";
import { QUIZ_QUESTION_COUNT } from "@/lib/constants";

const QuizResult = ({ correctAnswers, incorrectAnswers }) => {
  return (
    <div className="p-4">
      <div className="text-primary flex flex-col justify-center items-center">
        <p className="font-bold">Correct Answers: {correctAnswers.length}</p>
        <p className="font-bold text-secondary">
          Incorrect Answers: {incorrectAnswers.length}
        </p>
        <p className="font-bold text-secondary">
          Not Answered:{" "}
          {QUIZ_QUESTION_COUNT -
            correctAnswers.length -
            incorrectAnswers.length}
        </p>
      </div>

      <QuizResultAnswers
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
      />

      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="text-white bg-primary p-2 w-2/3 mt-2 rounded-md h-14 hover:bg-primary-100"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
