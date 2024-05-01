"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = ({ id, image }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/words/${id}`}
      className={`rounded-md bg-red p-2 mr-2 hover:bg-red-lighter transition-all ${
        pathname.includes(id) ? "mt-5" : ""
      } w-9 h-9 flex justify-center items-center`}
    >
      <Image src={`/icons/${image}.svg`} alt={image} width={24} height={24} />
    </Link>
  );
};

export default MenuItem;
