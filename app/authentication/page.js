"use client";

import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import React from "react";

const Authentication = () => {
  return (
    <>
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