"use client";
import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext({
  user: {},
  setUser: () => {},
  difficulty: "",
  setDifficulty: () => "",
  currentWord: "",
  setCurrentWord: () => "",
  previousWord: "",
  setPreviousWord: () => "",
  nextWord: "",
  setNextWord: () => "",
});

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [difficulty, setDifficulty] = useState("medium");
  const [previousWord, setPreviousWord] = useState("");
  const [nextWord, setNextWord] = useState("");
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    // check if user data exists in local storage
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    const difficultyData = localStorage.getItem("difficulty");
    if (difficultyData) {
      setDifficulty(JSON.parse(difficultyData));
    }

    const previousWord = localStorage.getItem("previousWord");
    if (previousWord) {
      setPreviousWord(JSON.parse(previousWord));
    }
    const nextWord = localStorage.getItem("nextWord");
    if (nextWord) {
      setNextWord(JSON.parse(nextWord));
    }

    const currentWord = localStorage.getItem("currentWord");
    if (currentWord) {
      setCurrentWord(JSON.parse(currentWord));
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        difficulty,
        setDifficulty,
        previousWord,
        setPreviousWord,
        nextWord,
        setNextWord,
        currentWord,
        setCurrentWord,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
