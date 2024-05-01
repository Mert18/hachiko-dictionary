import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt={"logo"}
      src={"/logo/logo-no-bg.svg"}
      width={100}
      height={100}
    />
  );
};

export default Logo;
