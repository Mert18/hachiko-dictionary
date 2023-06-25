import React from "react";
import Link from "next/link";
import Image from "next/image";

const Tab = ({ name, path, icon }) => {
  return (
    <div className="w-[48px] h-[48px] bg-white my-2 rounded-md hover:-translate-y-1 transition">
      <Link href={path}>
        <Image
          src={`/icons/${icon}.svg`}
          alt={name || "icon"}
          width={48}
          height={48}
          className="p-2"
        />
      </Link>
    </div>
  );
};

export default Tab;
