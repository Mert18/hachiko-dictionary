"use client";
import LoginForm from "@/components/authentication/LoginForm";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getFromLocalStorage } from "@/lib/LocalStorageHandler";
import { useRouter } from "next/navigation";
import { isTokenValid } from "@/lib/token";

function generateRandomLetter() {
  const charSet = 'abcdefghijklmnopqrstuvwxyz'; // Characters to choose from
  const randomIndex = Math.floor(Math.random() * charSet.length);

  return charSet.charAt(randomIndex);
}

const Login = () => {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [collectedWords, setCollectedWords] = useState([]);

  useEffect(() => {
    const word = generateRandomLetter();
    setCollectedWords([...collectedWords, word]);
  }, [emailValue, passwordValue])

  useEffect(() => {
    if (isTokenValid(getFromLocalStorage("accessToken"))) {
      router.push("/main");
    }
  }, [router]);

  const renderWords = () => {
    return collectedWords.map((word, index) => {
      const randomTop = Math.random() * (window.innerHeight - 100); // Adjust as needed
      const randomLeft = Math.random() * (window.innerWidth - 100); // Adjust as needed
      return (
        <div
          key={index}
          className="absolute top-0 left-0 opacity-30 text-primary-100 transform transition-all duration-700 text-3xl"
          style={{ top: randomTop + 'px', left: randomLeft + 'px', rotate: randomLeft + 'deg' }}
        >
          {word}
        </div>
      );
    });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen relative  overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        {/* LOGO */}
        <div className={"my-5"}>
          <Image
            alt={"logo"}
            src="/logo/logo-no-background.svg"
            width={150}
            height={150}
          />
        </div>

        {/* FORM */}
        <LoginForm setEmailValue={setEmailValue} setPasswordValue={setPasswordValue} />

        {/* REGISTER ROUTER */}
        <div className={"text-primary text-xs"}>
          <Link href="/authentication/register">
            <p>Do not have an account yet?</p>
            <hr />
            <div className={"flex justify-center items-center my-4"}>
              <Image
                alt={"user"}
                className={"p-1"}
                src="/icons/group_add.svg"
                width={30}
                height={30}
              />
            </div>
          </Link>
        </div>
      </div>
      {/* Test user */}
      <div className="absolute top-0 right-0 bg-primary-400 opacity-30 p-2 rounded-md m-2">
        <p>test@gmail.com</p>
        <p>test123</p>
      </div>


      {(emailValue.length > 0 || passwordValue.length > 0 ) && renderWords()}
    </div>
  );
};

export default Login;
