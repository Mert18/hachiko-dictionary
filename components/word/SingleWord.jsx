"use client";
import React from "react";
import WordTitle from "./WordTitle";
import WordSynonyms from "./WordSynonyms";
import WordAntonyms from "./WordAntonyms";
import WordDescriptions from "./WordDescriptions";
import WordSentences from "./WordSentences";
import WordHandler from "./WordHandler";
import { useGlobalContext } from "@/app/Context/store";
import AudioPlayer from "../AudioPlayer";

const SingleWord = ({ word }) => {
  const context = useGlobalContext();

  return (
    <div className="w-[90%] relative">
      <WordTitle title={word.title} kind={word.kind} />
      {word.fileUrl && word.fileUrl !== "N/A" && 
        <AudioPlayer audioUrl={word.fileUrl} />
      }
      {word.description?.length > 0 && (
        <WordDescriptions descriptions={word.description} />
      )}

      {word.synonyms?.length > 1 && <WordSynonyms synonyms={word.synonyms} />}
      {word.antonyms?.length > 1 && <WordAntonyms antonyms={word.antonyms} />}
      {word.sentences?.length > 1 && (
        <WordSentences sentences={word.sentences} />
      )}
      <div className="p-4 absolute top-0 right-0">
        <WordHandler difficulty={context.difficulty} />
      </div>
    </div>
  );
};

export default SingleWord;
