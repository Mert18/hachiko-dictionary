import React from "react";

const WordBox = ({ title }) => {
  return (
    <div className="m-2 w-16 h-16 bg-white text-primary flex justify-center items-center rounded-md">
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default WordBox;
