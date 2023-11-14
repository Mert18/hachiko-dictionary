"use client";
import React, { useEffect, useState } from "react";
import QuizMenu from "@/components/games/quiz/QuizMenu";
import QuizResult from "@/components/games/quiz/QuizResult";
import QuizGame from "@/components/games/quiz/QuizGame";
import GameHeader from "@/components/games/GameHeader";
import QuizIntermediary from "@/components/games/quiz/QuizIntermediary";
import withAuth from "@/lib/withAuth";
import { fetchNewQuestions, handleCompleteQuiz } from "@/api/quiz";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [gameState, setGameState] = useState("menu");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [intermediateMessage, setIntermediateMessage] = useState(
    "There are no more questions."
  );

  const handleStartGame = () => {
    setGameState("playing");
    fetchNewQuestions(setQuestions);
  };

  const handleAnswerQuestion = (choice) => {
    if (choice === questions[currentIndex].answer) {
      setCorrectAnswers((current) => [
        ...current,
        {
          question: questions[currentIndex],
          yourAnswer: choice,
        },
      ]);
    } else {
      setIncorrectAnswers((current) => [
        ...current,
        {
          question: questions[currentIndex],
          yourAnswer: choice,
        },
      ]);
    }
    handleSkipQuestion();
  };

  const handleSkipQuestion = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === questions.length - 1) {
      setGameState("intermediate");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-4 w-full h-full">
      <GameHeader title="Quiz" image="quiz" />

      {gameState === "menu" && <QuizMenu handleStartGame={handleStartGame} />}

      {gameState === "playing" && (
        <QuizGame
          questions={questions}
          currentIndex={currentIndex}
          handleAnswerQuestion={handleAnswerQuestion}
          setGameState={setGameState}
          gameState={gameState}
          setIntermediateMessage={setIntermediateMessage}
          handleSkipQuestion={handleSkipQuestion}
        />
      )}

      {gameState === "intermediate" && (
        <QuizIntermediary
          handleCompleteQuiz={() =>
            handleCompleteQuiz(setGameState, correctAnswers, incorrectAnswers)
          }
          intermediateMessage={intermediateMessage}
        />
      )}

      {gameState === "result" && (
        <QuizResult
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
        />
      )}
    </div>
  );
};

export default withAuth(Quiz);
