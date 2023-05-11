"use client";
import React, { useState, useEffect } from "react";
import SingleWord from "@/components/SingleWord";
import axiosInstance from "@/lib/axiosInstance";

const Word = ({ params }) => {
  const wordId = params.word;
  const [word, setWord] = useState({});
  const getWord = async () => {
    await axiosInstance
      .get(`/api/v1/word/${wordId}`)
      .then((res) => {
        setWord(res.data.data);
      })
      .catch((err) => {
        console.log("error getting word");
      });
  };

  useEffect(() => {
    getWord();
  }, [wordId]);

  return <SingleWord word={word} />;
};

export default Word;
