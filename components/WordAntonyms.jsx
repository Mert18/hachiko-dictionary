import React from "react";
import WordFieldTitle from "./WordFieldTitle";

const WordAntonyms = ({ antonyms }) => {
  return (
    <div className="py-5">
      <WordFieldTitle field="Antonyms" />
      <ul className="flex flex-wrap">
        {antonyms?.map((antonym) => {
          return (
            <li className="mr-3" key={antonym}>
              {antonym}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordAntonyms;
