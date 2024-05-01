"use client";
import LoginForm from "@/components/authentication/LoginForm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFromLocalStorage } from "@/lib/LocalStorageHandler";
import { useRouter } from "next/navigation";
import { isTokenValid } from "@/lib/token";

const Login = () => {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [collectedWords, setCollectedWords] = useState([]);

  useEffect(() => {
    if(emailValue.length === 0) {
      setCollectedWords([]);
    }else {
      const word = emailValue.slice(-1);
      setCollectedWords([...collectedWords, word]);
    }
  }, [emailValue])

  useEffect(() => {
    if(passwordValue.length === 0) {
      setCollectedWords([]);
    }else {
      const word = passwordValue.slice(-1);
      setCollectedWords([...collectedWords, word]);
    }
  }, [passwordValue])

  useEffect(() => {
    if (isTokenValid(getFromLocalStorage("accessToken"))) {
      router.push("/words");
    }
  }, [router]);

  const renderWords = () => {
    return collectedWords.map((word, index) => {
      const randomTop = Math.random() * (window.innerHeight - 100); // Adjust as needed
      const randomLeft = Math.random() * (window.innerWidth - 100); // Adjust as needed
      return (
        <div
          key={index}
          className="absolute top-0 left-0 opacity-30 text-red transform transition-all duration-700 text-xl"
          style={{ top: randomTop + 'px', left: randomLeft + 'px', rotate: randomLeft + 'deg' }}
        >
          {word}
        </div>
      );
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen relative overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        {/* LOGO */}
        <div className={"my-5"}>
          <Image
            alt={"logo"}
            src="/logo/logo-no-bg.svg"
            width={150}
            height={150}
          />
        </div>

        {/* FORM */}
        <LoginForm setEmailValue={setEmailValue} setPasswordValue={setPasswordValue} />

        {/* REGISTER ROUTER */}
        <div className={"text-red text-xs my-4"}>
          <Link href="/authentication/register">
            <p>Do not have an account yet?</p>
            <div className={"flex justify-center items-center"}>
              <p className="text-red text-sm underline">Register instead</p>
            </div>
          </Link>
        </div>
      </div>
      {/* Test user */}
      <div className="absolute top-0 right-0 bg-white opacity-30 p-2 m-2">
        <p>test@gmail.com</p>
        <p>test123</p>
      </div>

      {(emailValue.length > 0 || passwordValue.length > 0 ) && renderWords()}
    </div>
  );
};

export default Login;
