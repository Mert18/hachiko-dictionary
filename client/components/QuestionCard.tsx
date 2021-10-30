import classes from "./styles/questioncard.module.css";
import { useState, useEffect } from "react";

const QuestionCard = ({
  question,
  correctAnswer,
  incorrectAnswers,
  callback,
  userAnswer,
}: any) => {
  const [answers, setAnswers] = useState(
    [correctAnswer, ...incorrectAnswers].sort(() => 0.5 - Math.random())
  );

  return (
    <div className={classes.questioncard}>
      <div className={classes.questioncard__question}>
        <h2>{question.description}</h2>
      </div>
      <div className={classes.questioncard__answers}>
        {answers.map((ans: any) => (
          <div key={ans.title}>
            <button
              style={
                userAnswer?.correctAnswer === ans.title
                  ? { background: `green` }
                  : { background: `gray` }
              }
              onClick={callback}
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
