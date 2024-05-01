import React from "react";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  return (
    <div className="col-start-4 col-end-10">
      <div className="flex justify-start items-center h-full">
        <MenuItem id="profile" image="profile" />
        <MenuItem id="games" image="controller" />
      </div>
    </div>
  );
};

export default MenuItems;
