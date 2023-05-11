"use client";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const WordHandler = ({ difficulty }) => {
  const router = useRouter();

  const getOneWordByDifficulty = async (difficulty) => {
    await axiosInstance
      .get(`/api/v1/word/one/${difficulty}`)
      .then((res) => {
        console.log("res: ", res.data.data);
        router.push(`/main/words/${res.data.data.id}`);
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNextWord = async () => {
    await getOneWordByDifficulty(difficulty);
  };

  return (
    <div className="flex justify-start items-center w-max">
      <div
        className="hover:cursor-pointer hover:translate-x-1 transition p-2 bg-white rounded-md"
        onClick={handleNextWord}
      >
        <Image
          src="/icons/triangle_right.svg"
          width={24}
          height={24}
          alt="triangle facing right"
        />
      </div>
    </div>
  );
};

export default WordHandler;
