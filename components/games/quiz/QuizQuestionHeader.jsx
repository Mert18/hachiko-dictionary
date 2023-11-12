import React from "react";
import QuizTimer from "./QuizTimer";

const QuizQuestionHeader = ({
  currentIndex,
  questionsCount,
  setGameState,
  gameState,
  setIntermediateMessage,
}) => {
  const handleTimerUp = () => {
    setGameState("intermediate");
    setIntermediateMessage(
      "Time's up! You have not completed the quiz on time."
    );
  };
  return (
    <div className="flex justify-between items-center my-4">
      <p className="text-primary font-bold text-lg">
        <span>{currentIndex + 1}</span> / <span>{questionsCount}</span>
      </p>
      <QuizTimer
        onTimeUp={() => handleTimerUp()}
        startTimer={gameState === "playing"}
      />
    </div>
  );
};

export default QuizQuestionHeader;
