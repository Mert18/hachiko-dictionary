import Image from "next/image";
import React from "react";

const GameHeader = ({ title, image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="uppercase font-bold text-primary text-xl py-2">{title}</p>
      <Image src={` /icons/${image}.svg`} width={40} height={40} alt={image} />
    </div>
  );
};

export default GameHeader;
