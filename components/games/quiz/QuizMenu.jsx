import React from "react";
import GameIntroduction from "../GameIntroduction";

const QuizMenu = ({ handleStartGame }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <GameIntroduction
        description={"Guess the word from the given description"}
      />
      <button
        className="py-2 px-4 bg-red text-white font-bold hover:bg-red-lighter transition-all"
        onClick={() => handleStartGame()}
      >
        Start Game
      </button>
    </div>
  );
};

export default QuizMenu;
