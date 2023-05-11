"use client";
import React from "react";
import PrimaryTabs from "@/components/PrimaryTabs";
import SecondaryTabs from "@/components/SecondaryTabs";
import WordHandler from "@/components/WordHandler";
import { useGlobalContext } from "@/app/Context/store";
import DifficultyHandler from "@/components/DifficultyHandler";
import QuoteHandler from "@/components/QuoteHandler";

const MainLayout = ({ children }) => {
  const context = useGlobalContext();

  return (
    <div className="flex flex-col md:flex-row md:h-screen bg-white">
      <div className="md:flex-1 bg-white flex justify-center items-start pt-20">
        {children}
      </div>
      <div className="flex flex-col md:flex-1 bg-primary">
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
            <WordHandler difficulty={context.difficulty} />
          </div>
          <div className="p-4 flex-col justify-start items-center">
            <DifficultyHandler />
          </div>
        </div>
        <div className="p-4">
          <div className="p-4 flex-col justify-center items-center">
            <QuoteHandler difficulty={context.difficulty} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;