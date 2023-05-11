"use client";
import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext({
  user: {},
  setUser: () => {},
  difficulty: 2,
  setDifficulty: () => 2,
});

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [difficulty, setDifficulty] = useState(2);

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
  }, []);

  return (
    <GlobalContext.Provider
      value={{ user, setUser, difficulty, setDifficulty }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
