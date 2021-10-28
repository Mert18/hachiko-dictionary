import Container from "../../../components/Container";
import classes from "./guesstheword.module.css";
import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import { getAllWords } from "../../../lib/dictionary";
import QuestionCard from "../../../components/QuestionCard";

const GuessTheWord = ({ words }: any) => {
  const shuffled = words.sort(() => 0.5 - Math.random());
  const qsts = shuffled.slice(0, 10);

  const [questions, setQuestions] = useState(qsts);
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <div className={classes.guesstheword}>
        <div className={classes.guesstheword__game}>
          <div className={classes.guesstheword__game__menu}>
            <div className={classes.guesstheword__game__menu__desc}>
              <h1>Guess The Word</h1>
              <p>Devise the word from given description.</p>
            </div>
            <div className={classes.guesstheword__game__menu__options}>
              <button>History</button>
              <button>New Game</button>
            </div>
          </div>
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
