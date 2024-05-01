import React from "react";
import Link from "next/link";
import Image from "next/image";

const GameCard = ({ game }) => {
  return (
    <li className="flex justify-center items-center w-full">
      <Link href={game.link} className="flex justify-start items-center bg-red p-4 w-full hover:bg-red-lighter transition-all">
        <Image src={game.icon} alt={game.name} width={40} height={40} />
        <div className="flex flex-col items-start ml-4">
          <h2 className="font-bold text-white">{game.name}</h2>
          <p className="text-white">{game.description}</p>
        </div>
      </Link>
    </li>
  );
};

export default GameCard;
