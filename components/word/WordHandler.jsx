"use client";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const WordHandler = ({ difficulty }) => {
  const router = useRouter();

  const getOneWordByDifficulty = async (difficulty) => {
    await axiosInstance
      .get(`/api/v1/word/one/${difficulty}`)
      .then((res) => {
        router.push(`/main/words/${res.data.data.id}`);
        return res.data.data;
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleNextWord = async () => {
    await getOneWordByDifficulty(difficulty);
  };

  return (
    <div
      className="flex justify-start items-center w-max"
      onClick={handleNextWord}
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
