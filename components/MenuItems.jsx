import React from "react";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  return (
    <div>
      <div className="flex justify-start items-center h-full">
        <MenuItem id="profile" image="profile" />
        <MenuItem id="games" image="controller" />
        <MenuItem id="word-of-the-day" image="wordoftheday" />
      </div>
    </div>
  );
};

export default MenuItems;
