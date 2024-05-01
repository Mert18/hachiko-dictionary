import React from "react";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />

      <div className="grid grid-cols-12 w-full">
        <div className="col-start-1 col-end-13 md:col-start-4 md:col-end-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
