import React from "react";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <Navbar />

      <div className="flex justify-center items-start w-[40%]">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
