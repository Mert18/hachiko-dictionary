import React from "react";
import WordFieldTitle from "./WordFieldTitle";

const WordTitle = ({ title, kind }) => {
  return (
    <div className="flex flex-col justify-start items-start py-5">
      <WordFieldTitle field="Title" />
      <h1 className="text-5xl font-bold text-red relative">{title} <span className="absolute bottom-0 left-full text-xs">{kind}</span></h1>
    </div>
  );
};

export default WordTitle;
