import Container from "../../../components/Container";
import classes from "./guesstheword.module.css";
import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { getAllWords } from "../../../lib/dictionary";
import QuestionCard from "../../../components/QuestionCard";

export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

const GuessTheWord = ({ words }: any) => {
  const shuffled = words.sort(() => 0.5 - Math.random());
  let answersshuffled = words.sort(() => 0.5 - Math.random());
  const qsts = shuffled.slice(0, 10);
  let answs = answersshuffled.slice(0, 3);

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<any>(qsts);
  const [incorrectAnswers, setIncorrectAnswers] = useState<any>(answs);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startGame = () => {
    setLoading(true);
    setGameOver(false);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  useEffect(() => {
    let answersshuffled = words.sort(() => 0.5 - Math.random());
    let answs = answersshuffled.slice(0, 3);

    setIncorrectAnswers(answs);
  }, [number]);

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].title === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[number].description,
        answer,
        correct,
        correctAnswer: questions[number].title,
      };
      setUserAnswers((prev: any) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === 10) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <Container>
      <div className={classes.guesstheword}>
        <div className={classes.guesstheword__game}>
          {gameOver || userAnswers.length === 10 ? (
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
          ) : (
            ""
          )}
          {loading ? <p>Loading Questions...</p> : null}

          {!loading && !gameOver && (
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={10}
              question={questions[number]}
              incorrectAnswers={incorrectAnswers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          )}

          {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== 10 - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
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
