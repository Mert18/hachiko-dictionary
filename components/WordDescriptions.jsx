import React from "react";
import WordFieldTitle from "./WordFieldTitle";

const WordDescriptions = ({ descriptions }) => {
  return (
    <div className="flex flex-col py-4">
      <WordFieldTitle field={"Descriptions"} />
      <ul className="flex flex-col">
        {descriptions?.map((description) => {
          return (
            <li className="py-2" key={description}>
              {description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WordDescriptions;
