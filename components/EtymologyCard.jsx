"use client";
import { getRandomEtymologyWord } from "@/api/word";
import React, { useEffect, useState } from "react";

const EtymologyCard = () => {
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getRandomEtymologyWord(setWord, setLoading);
  }, [])
  
  return <div className="bg-red text-white p-2 fixed min-h-64 flex flex-col justify-center items-center">
    <h1 className="py-2 font-bold">Etymology Card</h1>
    <p className="py-2 italic">{word.title}</p>
    <p className="py-2">{word.etymology}</p>
  </div>;
};

export default EtymologyCard;
