import classes from "./styles/questioncard.module.css";
import { IQuestion, IAnswerObject } from "../types";
import { useState } from "react";

const QuestionCard = ({
  question,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
  incorrectAnswers,
}: IQuestion) => {
  const shuffled = [question, ...incorrectAnswers].sort(
    () => 0.5 - Math.random()
  );
  const [answers, setAnswers] = useState(shuffled);

  console.log(answers);
  return (
    <div className={classes.questioncard}>
      <div className={classes.questioncard__question}>
        {question.description.map((el: any) => (
          <p key={el}>{el}</p>
        ))}
      </div>
      <div className={classes.questionbuttons}>
        {answers.map((ans: any) => (
          <button onClick={callback} key={ans.title}>
            {ans.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
