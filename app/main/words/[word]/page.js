"use client";
import React, { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import withAuth from "@/lib/withAuth";
import SingleWord from "@/components/word/SingleWord";
import { getWord } from "@/api/word";

const Word = ({ params }) => {
  const wordId = params.word;
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWord(wordId, setWord, setLoading);
  }, [wordId]);

  return <>{loading ? <Loader /> : <SingleWord word={word} />}</>;
};

export default withAuth(Word);
