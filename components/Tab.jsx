import React from "react";
import Link from "next/link";
import Image from "next/image";

const Tab = ({ name, path, setIsMenuOpen }) => {

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }
  return (
    <Link href={path} className="flex justify-center text-white p-4 hover:bg-primary-100 transition-all bg-primary" onClick={() => handleLinkClick()}>
      {name}
    </Link>
  );
};

export default Tab;
