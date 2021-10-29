import Container from "../../../components/Container";
import classes from "./guesstheword.module.css";
import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { getAllWords } from "../../../lib/dictionary";
import QuestionCard from "../../../components/QuestionCard";

const GuessTheWord = ({ words }: any) => {
  const [questionNr, setQuestionNr] = useState<number>(0);
  const [questions, setQuestions] = useState<any>([]);
  const [gameState, setGameState] = useState<string>("menu");
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>([]);
  const [maxQuestion, setMaxQuestion] = useState<number>(10);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const startGame = () => {
    setGameOver(false);
    setGameState("game");
    setQuestionNr(questionNr + 1);
    setQuestions(words.sort(() => 0.5 - Math.random()).slice(0, 10));
    setIncorrectAnswers(words.sort(() => 0.5 - Math.random()).slice(0, 3));
  };

  const nextQuestion = () => {
    if (questionNr == maxQuestion) {
      setGameState("end");
      setGameOver(true);
    } else {
      setQuestionNr(questionNr + 1);
      setIncorrectAnswers(words.sort(() => 0.5 - Math.random()).slice(0, 3));
    }
  };

  return (
    <Container>
      <div className={classes.guesstheword}>
        <div className={classes.guesstheword__game}>
          {gameState === "menu" && gameOver ? (
            <div className={classes.guesstheword__game__menu}>
              <div className={classes.guesstheword__game__menu__desc}>
                <h1>Guess The Word</h1>
                <p>Devise the word from given description.</p>
              </div>
              <div className={classes.guesstheword__game__menu__options}>
                <button>History</button>
                <button onClick={startGame}>New Game</button>
              </div>
            </div>
          ) : gameState === "game" && !gameOver ? (
            <div className={classes.guesstheword__game__game}>
              <div className={classes.guesstheword__game__game__card}>
                <QuestionCard
                  question={questions[questionNr]}
                  correctAnswer={questions[questionNr]}
                  incorrectAnswers={incorrectAnswers}
                  key={questionNr}
                />
              </div>
              <div className={classes.guesstheword__game__game__bottom}>
                <button
                  className={classes.guesstheword__game__game__bottom__button}
                  onClick={nextQuestion}
                >
                  Next Question
                </button>
              </div>
            </div>
          ) : gameState === "end" && gameOver ? (
            <div className={classes.guesstheword__game__end}>Hey mr Rager!</div>
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const words = await getAllWords();
  return {
    props: {
      words,
    },
  };
};

export default GuessTheWord;
