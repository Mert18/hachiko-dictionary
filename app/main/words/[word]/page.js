"use client";
import React, { useState, useEffect } from "react";
import SingleWord from "@/components/word/SingleWord";
import axiosInstance from "@/lib/axiosInstance";
import Loader from "@/components/common/Loader";
import withAuth from "@/lib/withAuth";

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
        setLoading(false);
      });
  };

  useEffect(() => {
    getWord();
  }, [wordId]);

  return <>{loading ? <Loader /> : <SingleWord word={word} />}</>;
};

export default withAuth(Word);
