"use client";
import React, { useState, useEffect } from "react";
import Loader from "../common/Loader";
import withAuth from "@/lib/withAuth";
import WordOfTheDayIntroduction from "@/components/word-of-the-day/WordOfTheDayIntroduction";
import axios from "axios";

const WordOfTheDayContent = () => {
  const [word, setWordOfTheDay] = useState(null);

  const fetchWordOfTheDay = async () => {
    try {
      const apiKey = "MYAPIKEY"; //CHANGE FOR WORDNIK API KEY
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];
      const apiUrl = `https://api.wordnik.com/v4/words.json/wordOfTheDay?date=${formattedDate}&api_key=${apiKey}`;
      const res = await axios.get(apiUrl);
      setWordOfTheDay(res.data);
    } catch (error) {
      console.error("Error fetching word of the day:", error);
    }
  };

  useEffect(() => {
    fetchWordOfTheDay();
  }, []);

  if (!word) {
    return <Loader />;
  }

  return (
    <div>
      <WordOfTheDayIntroduction />
      {word && (
        <div className="mt-4 p-4 border rounded-lg shadow-sm bg-white">
          <h1 className="text-2xl font-bold text-red-600">{word.word}</h1>
          <p className="text-lg italic text-gray-600">Definition: {word.note}</p>
        </div>
      )}
      {word.examples && word.examples.length > 0 && (
        <div className="mt-4 p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-bold text-red-600">Examples:</h2>
          <ul className="list-disc ml-5">
            {word.examples.slice(0, 3).map((example, index) => (
              <li key={example.id}>
                <a href={example.url} target="_blank" rel="noopener noreferrer" className="text-red-600">
                  {example.text}
                </a>
                <p className="text-sm text-gray-600 italic">{example.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default withAuth(WordOfTheDayContent);
