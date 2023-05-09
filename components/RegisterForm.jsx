"use client";
import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import axios from "axios";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BACKEND_URI}/api/v1/auth/register`,
          values
        )
        .then((resp) => {
          console.log("Response", resp);
          const { accessToken, refreshToken } = resp.data.data;
          const bearer = `Bearer ${accessToken}`;
          axios.defaults.headers.Authorization = bearer;
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);
          notify(resp.data.message);
          if (resp.status === 200) {
            window.location.href = "/dashboard";
          }
          return resp.data;
        });
      console.log("Values: " + values);
    },
  });

  const notify = (message) => toast(message);

  return (
    <form onSubmit={formik.handleSubmit} className="my-10">
      <div className="flex flex-col w-full">
        <label className="py-1 text-sm text-white" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="px-4 py-2 text-black bg-white rounded-md outline-none focus:ring-2 focus:ring-white"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="py-1 text-sm text-white" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="px-4 py-2 text-black bg-white rounded-md outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="py-1 text-sm text-white" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="px-4 py-2 text-black bg-white rounded-md outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="py-1 text-sm text-white" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          className="px-4 py-2 text-black bg-white rounded-md outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <button
        className="my-2 bg-white text-primary px-4 py-2 rounded-md transition hover:translate-x-2 text-sm"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
