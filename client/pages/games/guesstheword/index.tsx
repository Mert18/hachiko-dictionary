import Container from "../../../components/Container";
import classes from "./guesstheword.module.css";
import { useState } from "react";
import { GetStaticProps } from "next";
import { getAllWords } from "../../../lib/dictionary";
import QuestionCard from "../../../components/QuestionCard";

const GuessTheWord = ({ words }: any) => {
  const [questionNr, setQuestionNr] = useState<number>(0);
  const [questions, setQuestions] = useState<any>([]);
  const [gameState, setGameState] = useState<string>("menu");
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>([]);
  const [maxQuestion, setMaxQuestion] = useState<number>(10);

  const startGame = () => {
    let newwords = words;
    setQuestions(words.sort(() => 0.5 - Math.random()).slice(0, 10));
    setIncorrectAnswers(newwords.sort(() => 0.5 - Math.random()).slice(0, 3));
    setGameState("game");
  };

  const nextQuestion = () => {
    if (questionNr === maxQuestion) {
      setGameState("end");
    } else {
      let newwords = words;
      setIncorrectAnswers(newwords.sort(() => 0.5 - Math.random()).slice(0, 3));
      setQuestionNr(questionNr + 1);
    }
  };

  return (
    <Container>
      <div className={classes.guesstheword}>
        <div className={classes.guesstheword__game}>
          {gameState === "menu" && (
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
          )}

          {gameState === "game" && (
            <div className={classes.guesstheword__game__game}>
              <div className={classes.guesstheword__game__game__card}>
                <QuestionCard
                  question={questions[questionNr]}
                  correctAnswer={questions[questionNr]}
                  incorrectAnswers={incorrectAnswers}
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
          )}

          {gameState === "end" && (
            <div className={classes.guesstheword__game__end}>Hey mr Rager!</div>
          )}
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
