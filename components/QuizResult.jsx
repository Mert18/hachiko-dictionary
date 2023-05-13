import React from "react";
import QuizResultAnswers from "./QuizResultAnswers";

const QuizResult = ({ correctAnswers, incorrectAnswers, handlePlayAgain }) => {
  console.log("incorrect answers: ", incorrectAnswers);
  return (
    <div className="p-4">
      <div className="text-primary flex flex-col justify-center items-center">
        <h1 className="font-bold">Quiz Result</h1>
        <p className="font-bold">Correct Answers: {correctAnswers.length}</p>
        <p className="font-bold text-secondary">
          Incorrect Answers: {incorrectAnswers.length}
        </p>
      </div>

      <QuizResultAnswers
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
      />

      <button
        onClick={() => {
          window.location.reload();
        }}
        className="text-white bg-primary p-2 w-full mt-2 rounded-md h-14 hover:bg-primary-100"
      >
        Play Again
      </button>
    </div>
  );
};

export default QuizResult;
