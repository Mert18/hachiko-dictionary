"use client";
import React from "react";
import WordTitle from "./WordTitle";
import WordSynonyms from "./WordSynonyms";
import WordAntonyms from "./WordAntonyms";
import WordDescriptions from "./WordDescriptions";
import WordSentences from "./WordSentences";

const Word = (word) => {
  return (
    <div className="w-[90%]">
      <WordTitle title={word.word.title} />
      {word.word.descriptions?.length > 0 && (
        <WordDescriptions descriptions={word.word.descriptions} />
      )}

      {word.word.synonyms?.length > 1 && (
        <WordSynonyms synonyms={word.word.synonyms} />
      )}
      {word.word.antonyms?.length > 1 && (
        <WordAntonyms antonyms={word.word.antonyms} />
      )}
      {word.word.sentences?.length > 1 && (
        <WordSentences sentences={word.word.sentences} />
      )}
    </div>
  );
};

export default Word;
