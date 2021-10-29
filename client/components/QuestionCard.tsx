import classes from "./styles/questioncard.module.css";
import { useState, useEffect } from "react";

const QuestionCard = ({ question, correctAnswer, incorrectAnswers }: any) => {
  const [answers, setAnswers] = useState([correctAnswer, ...incorrectAnswers]);

  useEffect(() => {
    answers.sort(() => 0.5 - Math.random());
  }, []);
  return (
    <div className={classes.questioncard}>
      <div className={classes.questioncard__question}>
        <h2>{question.description}</h2>
      </div>
      <div className={classes.questioncard__answers}>
        {answers.map((ans: any) => (
          <button>{ans.title}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
