"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Confirm = () => {
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  const confirmEmail = async (email, token) => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/confirmation/confirm`,
        {
          email,
          token
        }
      )
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage("Email confirmation failed.");
      });
  };
  useEffect(() => {
    const email = searchParams.get("email");
    const token = searchParams.get("token");
    confirmEmail(email, token);
  }, []);
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <div>
        <Image alt={"logo"} src={"/logo/logo-color.svg"} width={150} height={150} />
      </div>
      <div className={"flex flex-col justify-center items-center"}>
        {message && <p className={"font-bold my-4"}>{message}</p>}
        <Link className="text-primary" href="/words">
          Click here to go to dashboard.
        </Link>
      </div>

    </div>
  );
};

export default Confirm;
