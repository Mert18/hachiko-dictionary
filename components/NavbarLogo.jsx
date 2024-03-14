"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/app/Context/store";
import Tab from "./Tab";
import axiosInstance from "@/lib/axiosInstance";

const NavbarLogo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const context = useGlobalContext();
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const handleLogout = () => {
    context.setUser({});
    localStorage.clear();
    axiosInstance.defaults.headers.common["Authorization"] = "";
    window.location.href = "/authentication/login";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex justify-center items-center h-full">
      <div
        className="flex justify-center items-center hover:cursor-pointer"
        onClick={() => toggleMenu()}
      >
        <Image
          alt={"logo"}
          src={"/logo/logo-no-background.svg"}
          width={50}
          height={50}
        />
        <p className="text-white font-bold">Hachiko Dictionary</p>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full z-10 bg-primary transition-all" ref={ref}>
          <Tab name="Home" path="/words" setIsMenuOpen={setIsMenuOpen} />
          <Tab name="Profile" path="/words/profile" setIsMenuOpen={setIsMenuOpen} />
          <Tab name="Games" path="/words/games" setIsMenuOpen={setIsMenuOpen} />
          <p className="flex justify-center text-white p-2 hover:bg-primary-200 bg-primary hover:cursor-pointer mt-2" onClick={() => handleLogout()}>Logout</p>
        </div>
      )}
    </div>
  );
};

export default NavbarLogo;
