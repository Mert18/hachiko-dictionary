"use client";
import RegisterForm from "@/components/RegisterForm";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

const Register = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <div className="flex flex-col justify-center items-center">
        {/* LOGO */}
        <div className={"my-5"}>
          <Image alt={"logo"} src="/logo/logo-no-background.svg" width={150} height={150} />
        </div>

        {/* FORM */}
        <RegisterForm />

        {/* REGISTER ROUTER */}
        <div className={"text-primary text-xs"}>
          <Link href="/authentication/login">
            <p>Already have an account?</p>
            <hr />
            <div className={"flex justify-center items-center my-4"}>
              <Image alt={"door"} className={"p-1"} src="/icons/door_open.svg" width={30} height={30} />
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Register;
