"use client";
import React from "react";

const AuthenticationLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-[100vh]">{children}</div>
  );
};

export default AuthenticationLayout;
