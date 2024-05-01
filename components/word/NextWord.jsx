"use client";
import Image from "next/image";
import React from "react";

const WordHandler = ({handleNewWord}) => {
  return (
    <div
      className="flex justify-start items-center w-max"
      onClick={() => handleNewWord()}
    >
      <div className="hover:cursor-pointer hover:translate-x-1 transition bg-red rounded-md p-2">
        <Image
          src="/icons/play.svg"
          width={18}
          height={18}
          alt="triangle facing right"
        />
      </div>
    </div>
  );
};

export default WordHandler;
