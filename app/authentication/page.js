"use client";

import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import React, { useEffect } from "react";

const Authentication = () => {
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      window.location.href = "/main";
    }
  }, []);
  return (
    <>
      <div className="bg-white border-2 border-primary rounded-md text-primary p-4 absolute top-0 left-[50%] -translate-x-1/2 mt-5">
        <p>Hachiko Dictionary</p>
      </div>

      <div className="md:flex-1 bg-primary flex justify-center items-center">
        <div className="w-[50%]">
          <h1 className="text-center my-10 text-white font-bold text-4xl">
            Register
          </h1>
          <RegisterForm />
        </div>
      </div>
      <div className="md:flex-1 bg-white flex justify-center items-center">
        <div className="w-[50%]">
          <h1 className="text-center my-10 text-primary font-bold text-4xl">
            Login
          </h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Authentication;
