import Image from "next/image";
import React from "react";

const GameHeader = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase font-bold text-primary text-2xl py-2">{title}</p>
      <Image src={` /icons/${image}.svg`} width={90} height={90} alt={image} />
    </div>
  );
};

export default GameHeader;
