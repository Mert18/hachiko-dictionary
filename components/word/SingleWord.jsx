"use client";
import React, { useState, useEffect } from "react";
import WordTitle from "./WordTitle";
import WordSynonyms from "./WordSynonyms";
import WordAntonyms from "./WordAntonyms";
import WordDescriptions from "./WordDescriptions";
import WordSentences from "./WordSentences";
import NextWord from "./NextWord";
import AudioPlayer from "../AudioPlayer";
import axiosInstance from "@/lib/axiosInstance";
import Loader from "../common/Loader";
import withAuth from "@/lib/withAuth";

const SingleWord = () => {
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);

  const getRandomWord = async () => {
    return await axiosInstance.get("/api/v1/word/random");
  };

  const handleNewWord = async () => {
    setLoading(true);
    await getRandomWord()
      .then((res) => {
        setWord(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    handleNewWord();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-96 flex items-center justify-center">
        <Loader />
        </div>
      ) : (
        <div>
          <WordTitle title={word.title} kind={word.kind} />
          {word.fileUrl && word.fileUrl !== "N/A" && (
            <AudioPlayer audioUrl={word.fileUrl} />
          )}
          {word.description?.length > 0 && (
            <WordDescriptions descriptions={word.description} />
          )}

          {word.synonyms?.length > 1 && (
            <WordSynonyms synonyms={word.synonyms} />
          )}
          {word.antonyms?.length > 1 && (
            <WordAntonyms antonyms={word.antonyms} />
          )}
          {word.sentences?.length > 1 && (
            <WordSentences sentences={word.sentences} />
          )}
          <NextWord handleNewWord={handleNewWord} />
        </div>
      )}
    </div>
  );
};

export default withAuth(SingleWord);
