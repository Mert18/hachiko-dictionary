"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "./Loader";
import Image from "next/image";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: async (values) => {
      setLoading(true);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/register`,
          values
        )
        .then((res) => {
          if (res.data.success === false) {
            toast.error(res.data.message);
            return;
          }
          toast.success(res.data.message);
          const { accessToken, refreshToken } = res.data.data;
          const bearer = `Bearer ${accessToken}`;
          axios.defaults.headers.Authorization = bearer;
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);
          localStorage
            .setItem(
              "userData",
              JSON.stringify({
                accountId: res.data.data.accountId,
                email: res.data.data.email,
                username: res.data.data.username,
                role: res.data.data.role
              })
            );
          localStorage.setItem("difficultyData", "medium");
          if (res.status === 200) {
            window.location.href = "/main";
          }
        }).catch((err) => {
          toast.error(err.response.data.message);
        });
      setLoading(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="my-10">
      <div className="flex flex-col justify-center items-center my-3">
        <div className={"flex justify-center items-center my-1"}>
          <Image src={"/icons/badge.svg"} width={20} height={20} />
        </div>
        <input
          id="username"
          name="username"
          placeholder="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="text-center text-sm px-2 py-1 text-primary bg-white outline-none focus:border-b-2 border-b border-primary"
        />
      </div>
      <div className="flex flex-col justify-center items-center my-3">
        <div className={"flex justify-center items-center my-1"}>
          <Image src={"/icons/mail.svg"} width={20} height={20} />
        </div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="text-center text-sm px-2 py-1 text-primary bg-white outline-none focus:border-b-2 border-b border-primary"
        />
      </div>

      <div className="flex flex-col justify-center items-center my-3">
        <div className={"flex justify-center items-center my-1"}>
          <Image src={"/icons/key.svg"} width={20} height={20} />
        </div>
        <input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="text-center text-sm px-2 py-1 text-primary bg-white outline-none focus:border-b-2 border-b border-primary"
        />
      </div>
      <div className="flex flex-col justify-center items-center my-3">
        <div className={"flex justify-center items-center my-1"}>
          <Image src={"/icons/key.svg"} width={20} height={20} />
        </div>
        <input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="text-center text-sm px-2 py-1 text-primary bg-white outline-none focus:border-b-2 border-b border-primary"
        />
      </div>

      <div className={"flex justify-center items-center"}>
        <button
          className="my-2 text-white px-3 py-2 transition hover:translate-x-2"
          type="submit"
        >
          {loading ? <Loader /> : <Image src={"/icons/group_add.svg"} width={20} height={20} />}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
