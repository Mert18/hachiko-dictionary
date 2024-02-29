"use client";
import RegisterForm from "@/components/authentication/RegisterForm";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { isTokenValid } from "@/lib/token";
import { getFromLocalStorage } from "@/lib/LocalStorageHandler";

const Register = () => {
  const router = useRouter();

  useEffect(() => {
    if (isTokenValid(getFromLocalStorage("accessToken"))) {
      router.push("/main");
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center w-full h-screen">
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
        <div className="w-60">
          <RegisterForm />
        </div>

        {/* REGISTER ROUTER */}
        <div className={"text-primary text-xs"}>
          <Link href="/authentication/login">
            <p>Already have an account?</p>
            <hr />
            <div className={"flex justify-center items-center my-4"}>
              <Image
                alt={"door"}
                className={"p-1"}
                src="/icons/door_open.svg"
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

export default Register;
