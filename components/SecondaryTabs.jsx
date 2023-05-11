import React from "react";
import Tab from "./Tab";

const SecondaryTabs = () => {
  return (
    <ul className="flex flex-wrap justify-start items-start">
      <li>
        <Tab name="quiz" icon="quiz" path="/main/games/quiz" />
      </li>
    </ul>
  );
};

export default SecondaryTabs;
