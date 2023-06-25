import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./Loader";
import Image from "next/image";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      setLoading(true);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/login`,
          values
        )
        .then((res) => {
          const { accessToken, refreshToken } = res.data.data;
          const bearer = `Bearer ${accessToken}`;
          axios.defaults.headers.Authorization = bearer;
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);
          toast.success(res.data.message);
          localStorage.setItem(
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
            window.location.href = "/main ";
          }
          return res.data;
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
      setLoading(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="my-10">
      <div className="flex flex-col justify-center items-center my-3">
        <div className={"flex justify-center items-center my-1"}>
          <Image alt={"mail"} src={"/icons/mail.svg"} width={20} height={20} />
        </div>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="text-center text-sm px-2 py-1 text-primary bg-white outline-none focus:border-b-2 border-b border-primary"
        />
      </div>

      <div className="flex flex-col justify-center itemes-center my-3">
        <div className={"flex justify-center items-center my-1"}>
          <Image alt={"key"} src={"/icons/key.svg"} width={20} height={20} />
        </div>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="text-center text-sm px-2 py-1 text-primary bg-white outline-none focus:border-b-2 border-b border-primary"
        />
      </div>
      <div className={"flex justify-center items-center"}>
        <button
          className="my-2 text-white px-3 py-2 transition hover:translate-x-2"
          type="submit"
        >
          {loading ? <Loader /> : <Image alt={"door"} src={"/icons/door_open.svg"} width={20} height={20} />}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
