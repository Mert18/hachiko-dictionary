import React from "react";
import WordFieldTitle from "./WordFieldTitle";

const WordSentences = ({ sentences }) => {
  return (
    <div className="py-5">
      <WordFieldTitle field="Sentences" />
      <ul className="flex flex-col">
        {sentences?.map((sentence) => {
          return (
            <li className="py-2 text-primary" key={sentence}>
              {sentence}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordSentences;
