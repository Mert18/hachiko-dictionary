import React from "react";
import NavbarLogo from "./NavbarLogo";
import MenuItems from "./MenuItems";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div className="border-b border-red flex flex-col md:grid grid-cols-12 w-full p-4">
      <div className="col-start-1 md:col-end-4 col-end-1">
        <NavbarLogo />
      </div>
      <div className="col-start-4 col-end-13 flex justify-between items-center">
        <MenuItems />
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
