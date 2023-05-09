import React from "react";
import "../globals.css";

export const metadata = {
  title: "Authentication",
  description: "Authenticate yourself in hachiko dictionary.",
};

const AuthenticationLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-[100vh]">{children}</div>
  );
};

export default AuthenticationLayout;
