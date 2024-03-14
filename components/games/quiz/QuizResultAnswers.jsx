import React from "react";

const QuizResultAnswers = ({ incorrectAnswers }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-2/3">
        <ul className="py-4">
          {incorrectAnswers.map((answer, index) => {
            return (
              <li
                key={index}
                className="bg-secondary text-white p-2 my-2 text-sm"
              >
                <b>Question</b>: {answer?.question?.description} <br />
                <b>Your Answer</b>: {answer?.yourAnswer} <br />
                <b>Correct Answer</b>: {answer?.question?.answer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuizResultAnswers;
