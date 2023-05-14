"use client";
import React, { useState, useEffect } from "react";
import SingleWord from "@/components/SingleWord";
import axiosInstance from "@/lib/axiosInstance";
import Loader from "@/components/Loader";

const Word = ({ params }) => {
  const wordId = params.word;
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);
  const getWord = async () => {
    setLoading(true);
    await axiosInstance
      .get(`/api/v1/word/${wordId}`)
      .then((res) => {
        setWord(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error getting word, ", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getWord();
  }, [wordId]);

  return <>{loading ? <Loader /> : <SingleWord word={word} />}</>;
};

export default Word;
