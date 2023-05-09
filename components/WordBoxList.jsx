import React from "react";
import WordBox from "./WordBox";

const WordBoxList = ({ words, handleCurrentWord }) => {
  return (
    <ul className="py-5 flex flex-wrap w-[80%]">
      {words?.map((word) => (
        <li
          className="transition hover:cursor-pointer hover:-translate-y-1"
          key={word.title}
          onClick={() => handleCurrentWord(word)}
        >
          <WordBox title={word.title} />
        </li>
      ))}
    </ul>
  );
};

export default WordBoxList;
