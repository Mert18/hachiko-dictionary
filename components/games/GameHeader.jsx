import Image from "next/image";
import React from "react";

const GameHeader = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-red p-4 rounded-md">
        <Image
          src={`/icons/${image}.svg`}
          width={40}
          height={40}
          alt={image}
        />
      </div>
      <p className="uppercase font-bold text-red text-xl py-2">{title}</p>
    </div>
  );
};

export default GameHeader;
