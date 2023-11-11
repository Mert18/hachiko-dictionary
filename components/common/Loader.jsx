import React from "react";
import Logo from "./Logo";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="rotate-icon">
        <div className="logo">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Loader;
