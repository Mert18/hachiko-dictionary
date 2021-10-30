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
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<any>([]);
  const [myWords, setMyWords] = useState<any>(words);

  const startGame = () => {
    setGameOver(false);
    setGameState("game");
    setQuestionNr(questionNr + 1);
    setQuestions(words.sort(() => 0.5 - Math.random()).slice(0, 10));
    setMyWords(words.filter((el: any) => questions.indexOf(el) < 0));
    setIncorrectAnswers(myWords.sort(() => 0.5 - Math.random()).slice(0, 3));
    setUserAnswers([]);
  };

  const nextQuestion = () => {
    if (questionNr === maxQuestion - 1) {
      setGameState("end");
      setGameOver(true);
    } else {
      setQuestionNr(questionNr + 1);
      setIncorrectAnswers(myWords.sort(() => 0.5 - Math.random()).slice(0, 3));
    }
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.target.childNodes[0].data;
      const correct = questions[questionNr].title === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }

      const answerObject = {
        question: questions[questionNr].description,
        answer,
        correct,
        correctAnswer: questions[questionNr].title,
      };

      setUserAnswers((prev: any) => [...prev, answerObject]);
    }
  };

  useEffect(() => {
    setMyWords(words.filter((el: any) => questions.indexOf(el) < 0));
  }, [questions]);

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
              <div className={classes.guesstheword__game__game__top}>
                {score}
                {questionNr}
              </div>
              <div className={classes.guesstheword__game__game__card}>
                <QuestionCard
                  question={questions[questionNr]}
                  correctAnswer={questions[questionNr]}
                  incorrectAnswers={incorrectAnswers}
                  userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
                  key={questionNr}
                  callback={checkAnswer}
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
