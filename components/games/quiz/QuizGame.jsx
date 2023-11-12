import React from "react";
import QuizQuestionHeader from "./QuizQuestionHeader";
import QuizQuestion from "./QuizQuestion";
import QuizQuestionChoices from "./QuizQuestionChoices";

const QuizGame = ({
  questions,
  currentIndex,
  handleAnswerQuestion,
  setGameState,
  gameState,
  setIntermediateMessage,
}) => {
  return (
    <div className="p-4 w-[80%]">
      <QuizQuestionHeader
        currentIndex={currentIndex}
        questionsCount={questions?.length}
        setGameState={setGameState}
        gameState={gameState}
        setIntermediateMessage={setIntermediateMessage}
      />
      <QuizQuestion question={questions[currentIndex]} />
      <QuizQuestionChoices
        choices={questions[currentIndex]?.choices}
        handleAnswerQuestion={handleAnswerQuestion}
      />
    </div>
  );
};

export default QuizGame;
