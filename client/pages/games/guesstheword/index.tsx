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
        <div className={classes.guesstheword__game}>Game Component</div>
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
