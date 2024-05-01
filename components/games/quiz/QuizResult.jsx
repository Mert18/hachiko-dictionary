import React from "react";
import QuizResultAnswers from "./QuizResultAnswers";
import { QUIZ_QUESTION_COUNT } from "@/lib/constants";

const QuizResult = ({ correctAnswers, incorrectAnswers }) => {
  return (
    <div className="p-4 w-full">
      <div className="text-red flex flex-col justify-center items-center">
        <p className="font-bold">Correct Answers: {correctAnswers.length}</p>
        <p className="font-bold text-brown">
          Incorrect Answers: {incorrectAnswers.length}
        </p>
        <p className="font-bold text-brown">
          Not Answered:{" "}
          {QUIZ_QUESTION_COUNT -
            correctAnswers.length -
            incorrectAnswers.length}
        </p>
      </div>

      <QuizResultAnswers
        incorrectAnswers={incorrectAnswers}
      />

      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="text-white bg-red p-2 w-2/3 mt-2 h-14 hover:bg-red-lighter transition-all"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default QuizResult;
