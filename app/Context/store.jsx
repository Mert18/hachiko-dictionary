"use client";
import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext({
  user: {},
  setUser: () => {
  },
  difficulty: "",
  setDifficulty: () => ""
});

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [difficulty, setDifficulty] = useState("medium");

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        difficulty,
        setDifficulty
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
