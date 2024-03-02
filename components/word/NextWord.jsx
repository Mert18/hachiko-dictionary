"use client";
import Image from "next/image";
import React from "react";

const WordHandler = ({handleNewWord}) => {
  return (
    <div
      className="flex justify-start items-center w-max"
      onClick={() => handleNewWord()}
    >
      <div className="hover:cursor-pointer hover:translate-x-1 transition p-1 bg-white rounded-md">
        <Image
          src="/icons/play.svg"
          width={28}
          height={28}
          alt="triangle facing right"
        />
      </div>
    </div>
  );
};

export default WordHandler;
