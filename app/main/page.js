"use client";
import axiosInstance from "@/lib/axiosInstance";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Main = ({ children }) => {
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

  useEffect(() => {
    getOneWordByDifficulty("medium");
  }, []);

  return children;
};

export default Main;
