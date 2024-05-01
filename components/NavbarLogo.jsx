"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <div className="col-start-1 md:col-end-4 col-end-2 h-full flex justify-center items-center">
      <Link
        href="/"
        className="hover:cursor-pointer flex justify-center items-center"
      >
        <Image
          alt={"logo"}
          src={"/logo/logo-w-title.svg"}
          width={120}
          height={120}
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
