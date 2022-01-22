import classes from "./styles/questioncard.module.css";
import { useState, useEffect } from "react";

const QuestionCard = ({
  question,
  correctAnswer,
  incorrectAnswers,
  callback,
  userAnswer,
  disabled,
  message,
}: any) => {
  const [answers, setAnswers] = useState(
    [correctAnswer, ...incorrectAnswers].sort(() => 0.5 - Math.random())
  );

  return (
    <div className={classes.questioncard}>
      <div className={classes.questioncard__question}>
        {question.description.map((el: any) => (
          <h2 key={el}>{el}</h2>
        ))}
      </div>
      <div
        className={classes.messageguess}
        style={
          message === "Correct! :)"
            ? { color: "var(--green)" }
            : { color: "var(--red)" }
        }
      >
        {message}
      </div>
      <div className={classes.questioncard__answers}>
        {answers.map((ans: any) => (
          <div key={ans.title}>
            <button
              onClick={callback}
              disabled={disabled}
              style={
                disabled
                  ? { background: "inherit" }
                  : { background: "var(--orange)", color: "var(--white)" }
              }
              className={
                userAnswer?.correctAnswer === ans.title
                  ? classes.correct
                  : classes.incorrect
              }
            >
              {ans.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
