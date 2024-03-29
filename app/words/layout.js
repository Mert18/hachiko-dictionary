import React from "react";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden words-wrapper">
      <Navbar />

      <div className="flex justify-center items-start words-layout">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
