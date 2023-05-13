"use client";
import React from "react";
import PrimaryTabs from "@/components/PrimaryTabs";
import SecondaryTabs from "@/components/SecondaryTabs";
import WordHandler from "@/components/WordHandler";
import { useGlobalContext } from "@/app/Context/store";
import DifficultyHandler from "@/components/DifficultyHandler";
import QuoteHandler from "@/components/QuoteHandler";
import Image from "next/image";
import Tab from "@/components/Tab";

const MainLayout = ({ children }) => {
  const context = useGlobalContext();

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-7 bg-white flex justify-center items-start pt-20 min-h-screen">
        {children}
      </div>
      <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13 bg-primary flex flex-col md:fixed md:right-0 md:top-0 md:w-1/2 md:h-screen">
        <div className="flex flex-col md:flex-1 bg-primary">
          <div className="p-4 flex-col justify-start items-center">
            <Tab icon={"home"} name={"home"} path={"/main"} />
          </div>
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
