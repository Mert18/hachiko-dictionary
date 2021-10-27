import classes from "./styles/questioncard.module.css";
import { IQuestion } from "../types";
import { useState } from "react";

const QuestionCard = ({
  question,
  answers,
  correctAnswer,
  score,
}: IQuestion) => {
  const myanswers = [...answers, correctAnswer];
  const shuffled = myanswers.sort(() => 0.5 - Math.random());

  const [realAnswers, setRealAnswers] = useState(shuffled);
  return (
    <div className={classes.questioncard}>
      <div className={classes.questioncard__question}>{question}</div>
      <div className={classes.questionbuttons}>
        {realAnswers.map((answer: any) => (
          <button key={answer}></button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
