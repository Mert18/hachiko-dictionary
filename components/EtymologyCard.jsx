"use client";
import { getRandomEtymologyWord } from "@/api/word";
import React, { useEffect, useState } from "react";

const EtymologyCard = () => {
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getRandomEtymologyWord(setWord, setLoading);
  }, [])
  
  return <div className="text-red p-2 fixed min-h-64 flex flex-col mt-5">
    <p className="py-2 italic underline">{word.title}</p>
    <p className="py-2">{word.etymology}</p>
  </div>;
};

export default EtymologyCard;
