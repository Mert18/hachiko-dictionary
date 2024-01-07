import React from "react";

const SkipQuestion = ({ handleSkipQuestion }) => {
  return (
    <div
      className="flex justify-center items-center text-sm p-2 m-4 text-secondary cursor-pointer"
      onClick={() => handleSkipQuestion()}
    >
      <p>Skip Question</p>
    </div>
  );
};

export default SkipQuestion;
