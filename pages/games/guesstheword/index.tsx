import Container from "../../../components/Container";
import classes from "./guesstheword.module.css";
import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { getAllWords } from "../../../lib/dictionary";
import QuestionCard from "../../../components/QuestionCard";
import SummaryWordCard from "../../../components/SummaryWordCard";
import Link from "next/link";

const GuessTheWord = ({ words }: any) => {
  const [questionNr, setQuestionNr] = useState<number>(0);
  const [questions, setQuestions] = useState<any>([]);
  const [gameState, setGameState] = useState<string>("menu");
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>([]);
  const [maxQuestion, setMaxQuestion] = useState<number>(11);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<any>([]);
  const [myWords, setMyWords] = useState<any>(words);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const startGame = () => {
    setGameOver(false);
    setGameState("game");
    setQuestionNr(questionNr + 1);
    setQuestions(words.sort(() => 0.5 - Math.random()).slice(0, 11));
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
      setDisabled(false);
      setMessage("");
    }
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.target.childNodes[0].data;
      const correct = questions[questionNr].title === answer;
      if (correct) {
        setScore((prev) => prev + 1);
        setMessage("Correct! :)");
      } else {
        setMessage("Incorrect :(");
      }
      setDisabled(true);

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
                <div className={classes.guesstheword__game__game__top__score}>
                  <h3>Score: {score}</h3>
                </div>
                <div className={classes.guesstheword__game__game__top__qnr}>
                  <h3>
                    {questionNr} / {maxQuestion - 1}
                  </h3>
                </div>
              </div>
              <div className={classes.guesstheword__game__game__card}>
                <QuestionCard
                  question={questions[questionNr]}
                  correctAnswer={questions[questionNr]}
                  incorrectAnswers={incorrectAnswers}
                  userAnswer={userAnswers ? userAnswers[questionNr] : undefined}
                  key={questionNr}
                  callback={checkAnswer}
                  disabled={disabled}
                  message={message}
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
            <div className={classes.guesstheword__game__end}>
              <div className={classes.guesstheword__game__end__stats}>
                <p>You got {score} point(s) out of 10.</p>
              </div>
              <ul className={classes.guesstheword__game__end__answers}>
                {userAnswers.map((answer: any) => (
                  <li key={answer.correctAnswer}>
                    <SummaryWordCard answer={answer} key={answer.answer} />
                  </li>
                ))}
              </ul>
              <div>
                <Link href="guesstheword">
                  <a
                    onClick={() => {
                      window.location.href = "/games/guesstheword";
                    }}
                  >
                    Play Again
                  </a>
                </Link>
              </div>
            </div>
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
