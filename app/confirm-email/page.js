"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

const Confirm = () => {
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  const confirmEmail = async (email, token) => {
    console.log("inside confirm: ", email, token);
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/confirmation/confirm`,
        {
          email,
          token,
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
    <div className="h-screen flex justify-center items-center">
      {message && <p>{message}</p>}
      <Link className="text-primary" href="/dashboard">
        Click here to go to dashboard.
      </Link>
    </div>
  );
};

export default Confirm;
