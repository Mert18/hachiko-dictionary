import React from "react";
import Tab from "./Tab";

const PrimaryTabs = () => {
  return (
    <ul className="flex flex-wrap justify-start items-start">
      <li>
        <Tab name="profile" icon="account_box" path="/words/profile" />
      </li>
    </ul>
  );
};

export default PrimaryTabs;
