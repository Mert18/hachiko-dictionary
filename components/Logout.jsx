"use client";
import { useGlobalContext } from "@/app/Context/store";
import axiosInstance from "@/lib/axiosInstance";
import Image from "next/image";
import React from "react";

const Logout = () => {
  const context = useGlobalContext();

  const handleLogout = () => {
    context.setUser({});
    localStorage.clear();
    axiosInstance.defaults.headers.common["Authorization"] = "";
    window.location.href = "/authentication/login";
  };
  return (
    <div className="col-start-10 col-end-13 flex justify-end items-center m-2">
      <button className="bg-red p-2 rounded-md transition-all hover:bg-red-lighter" onClick={handleLogout}>
        <Image src="/icons/door.svg" alt="logout" width={16} height={16} />
      </button>
    </div>
  );
};

export default Logout;
