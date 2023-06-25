import React from "react";
import { useGlobalContext } from "@/app/Context/store";

const DifficultyHandler = () => {
  const { difficulty, setDifficulty } = useGlobalContext();

  const handleDifficulty = (newValue) => {
    setDifficulty(newValue);
    localStorage.setItem("difficultyData", JSON.stringify(newValue));
  };
  return (
    <div>
      <button
        className={difficulty === "easy" ?
          "bg-primary-400 px-4 py-2 rounded-md font-bold text-sm text-primary mr-2 transition hover:-translate-y-1" :
          "px-4 py-2 rounded-md bg-white font-bold text-sm text-primary mr-2 transition hover:-translate-y-1"}
        onClick={() => handleDifficulty("easy")}
      >
        Easy
      </button>
      <button
        className={difficulty === "medium" ?
          "bg-primary-400 px-4 py-2 rounded-md font-bold text-sm text-primary mr-2 transition hover:-translate-y-1" :
          "px-4 py-2 rounded-md bg-white font-bold text-sm text-primary mr-2 transition hover:-translate-y-1"
        }
        onClick={() => handleDifficulty("medium")}
      >
        Medium
      </button>
      <button
        className={difficulty === "hard" ?
          "bg-primary-400 px-4 py-2 rounded-md font-bold text-sm text-primary transition hover:-translate-y-1" :
          "px-4 py-2 rounded-md bg-white font-bold text-sm text-primary transition hover:-translate-y-1"
        }
        onClick={() => handleDifficulty("hard")}
      >
        Hard
      </button>
    </div>
  );
};

export default DifficultyHandler;
