import classes from "./styles/questioncard.module.css";
import { useState } from "react";

const SummaryWordCard = ({ answer }: any) => {
  const [extended, setExtended] = useState<boolean>(false);

  return (
    <div
      style={
        answer.correct
          ? { background: `var(--green)`, color: `var(--white)` }
          : { background: `var(--red)`, color: `var(--white)` }
      }
      className={classes.summarywordcard}
      onClick={() => setExtended(!extended)}
    >
      <div className={classes.summarywordcard__initial}>
        <p>
          Answer was:{" "}
          <span style={{ color: "black" }}>{answer.correctAnswer}</span>, you
          said <span style={{ color: "black" }}>{answer.answer}</span>
        </p>
      </div>
      {extended && (
        <div className={classes.summarywordcard__extended}>
          {answer.question.map((exp: any) => (
            <p style={{ wordWrap: "break-word", maxWidth: "37rem" }} key={exp}>
              {exp}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SummaryWordCard;
