import React from "react";
import WordFieldTitle from "./WordFieldTitle";

const WordTitle = ({ title }) => {
  return (
    <div className="flex flex-col justify-start items-start  py-5">
      <WordFieldTitle field="Title" />
      <h1 className="text-5xl font-bold text-primary">{title}</h1>
    </div>
  );
};

export default WordTitle;
