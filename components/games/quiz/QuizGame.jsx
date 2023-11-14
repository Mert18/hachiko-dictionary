import React from "react";
import QuizQuestionHeader from "./QuizQuestionHeader";
import QuizQuestion from "./QuizQuestion";
import QuizQuestionChoices from "./QuizQuestionChoices";
import SkipQuestion from "./SkipQuestion";

const QuizGame = ({
  questions,
  currentIndex,
  handleAnswerQuestion,
  setGameState,
  gameState,
  setIntermediateMessage,
  handleSkipQuestion,
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
      <SkipQuestion handleSkipQuestion={handleSkipQuestion} />
    </div>
  );
};

export default QuizGame;
