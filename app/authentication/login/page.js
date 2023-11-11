"use client";
import LoginForm from "@/components/authentication/LoginForm";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { getFromLocalStorage } from "@/lib/LocalStorageHandler";
import { useRouter } from "next/navigation";
import { isTokenValid } from "@/lib/token";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    if (isTokenValid(getFromLocalStorage("accessToken"))) {
      router.push("/main");
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
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
        <LoginForm />

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
    </div>
  );
};

export default Login;
