import React from "react";
import WordFieldTitle from "./WordFieldTitle";

const WordSynonyms = ({ synonyms }) => {
  return (
    <div className="py-5">
      <WordFieldTitle field="Synonyms" />
      <ul className="flex flex-wrap">
        {synonyms?.map((synonym) => {
          return (
            <li className="mr-3" key={synonym}>
              {synonym}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordSynonyms;
