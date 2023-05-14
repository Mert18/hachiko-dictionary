"use client";
import React from "react";
import WordTitle from "./WordTitle";
import WordSynonyms from "./WordSynonyms";
import WordAntonyms from "./WordAntonyms";
import WordDescriptions from "./WordDescriptions";
import WordSentences from "./WordSentences";

const Word = ({ word }) => {
  return (
    <div className="w-[90%]">
      <WordTitle title={word.title} />
      {word.descriptions?.length > 0 && (
        <WordDescriptions descriptions={word.descriptions} />
      )}

      {word.synonyms?.length > 1 && <WordSynonyms synonyms={word.synonyms} />}
      {word.antonyms?.length > 1 && <WordAntonyms antonyms={word.antonyms} />}
      {word.sentences?.length > 1 && (
        <WordSentences sentences={word.sentences} />
      )}
    </div>
  );
};

export default Word;
