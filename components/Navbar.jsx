import React from "react";
import NavbarLogo from "./NavbarLogo";
import MenuItems from "./MenuItems";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div className="border-b border-red grid grid-cols-12 w-full h-20">
      <NavbarLogo />
      <MenuItems />
      <Logout />
    </div>
  );
};

export default Navbar;
