"use client";
import React from "react";
import WordBoxList from "@/components/WordBoxList";
import PrimaryTabs from "@/components/PrimaryTabs";
import SecondaryTabs from "@/components/SecondaryTabs";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-screen bg-white">
      <div className="md:flex-1 bg-white flex justify-center items-start pt-20">
        {children}
      </div>
      <div className="flex flex-col md:flex-1 bg-primary">
        <div className="p-4 flex-col justify-start items-center">
          <p className="text-xs font-bold text-white">You</p>
          <PrimaryTabs />
        </div>
        <div className="p-4 flex-col justify-start items-center">
          <p className="text-xs font-bold text-white">Games</p>
          <SecondaryTabs />
        </div>
        <div className="p-4 flex-col justify-start items-center">
          <WordHandler />
          <WordBoxList />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
