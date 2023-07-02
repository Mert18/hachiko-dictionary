"use client";
import React from "react";
import PrimaryTabs from "@/components/PrimaryTabs";
import SecondaryTabs from "@/components/SecondaryTabs";
import { useGlobalContext } from "@/app/Context/store";
import QuoteHandler from "@/components/QuoteHandler";
import Image from "next/image";
import axiosInstance from "@/lib/axiosInstance";
import Link from "next/link";

const MainLayout = ({ children }) => {
  const context = useGlobalContext();

  const handleLogout = () => {
    context.setUser({});
    localStorage.clear();
    axiosInstance.defaults.headers.common["Authorization"] = "";
    window.location.reload();
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-7 bg-white flex justify-center items-start pt-20 min-h-screen">
        {children}
      </div>
      <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13 bg-primary flex flex-col md:fixed md:right-0 md:top-0 md:w-1/2 md:h-screen">
        <div className="flex flex-col md:flex-1 bg-primary relative">
          <div className="absolute top-0 right-0 transition-all m-2 bg-white rounded-md flex justify-center items-center hover:bg-primary-400 hover:cursor-pointer">
            <button className="p-2" onClick={() => handleLogout()}>
              <Image
                src="/icons/logout.svg"
                width={24}
                height={24}
                alt="door"
              />
            </button>
          </div>
          <div
            className={"p-4 flex flex-col justify-center items-center w-full"}
          >
            <Link href={"/main"}>
              <Image
                alt={"logo"}
                src={"/logo/logo-no-background.svg"}
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div className="p-4">
            <p className="text-xs font-bold text-white">You</p>
            <PrimaryTabs />
          </div>
          <div className="p-4">
            <p className="text-xs font-bold text-white">Games</p>
            <SecondaryTabs />
          </div>
        </div>
        <div className="p-4">
          <div className="p-4">
            <QuoteHandler difficulty={context.difficulty} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
