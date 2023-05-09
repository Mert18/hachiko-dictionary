import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:h-[100vh]">{children}</div>
  );
};

export default MainLayout;
