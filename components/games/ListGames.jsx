"use client";
import withAuth from "@/lib/withAuth";
import React from "react";
import GameCard from "./GameCard";

const ListGames = () => {
  const games = [
    {
      name: "Quiz",
      icon: "/icons/quiz.svg",
      link: "/words/games/quiz",
      description: "Test your knowledge with a quiz",
    },
  ];

  return (
    <div>
      <ul className="flex flex-col items-start border border-primary">
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </ul>
    </div>
  );
};

export default withAuth(ListGames);
