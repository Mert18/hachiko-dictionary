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
        style={{
          backgroundColor: difficulty === "easy" ? "#D2EFA0" : "#F9F9F9"
        }}
        className="px-4 py-2 rounded-md bg-white font-bold text-sm text-primary mr-2 transition hover:-translate-y-1"
        onClick={() => handleDifficulty("easy")}
      >
        Easy
      </button>
      <button
        style={
          difficulty === "medium" && {
            backgroundColor: difficulty === "medium" ? "#D2EFA0" : "#F9F9F9"
          }
        }
        className="px-4 py-2 rounded-md bg-white font-bold text-sm text-primary mr-2 transition hover:-translate-y-1"
        onClick={() => handleDifficulty("medium")}
      >
        Medium
      </button>
      <button
        style={{
          backgroundColor: difficulty === "hard" ? "#D2EFA0" : "#F9F9F9"
        }}
        className="px-4 py-2 rounded-md bg-white font-bold text-sm text-primary transition hover:-translate-y-1"
        onClick={() => handleDifficulty("hard")}
      >
        Hard
      </button>
    </div>
  );
};

export default DifficultyHandler;
