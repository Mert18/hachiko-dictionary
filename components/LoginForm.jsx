import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
              role: res.data.data.role,
            })
          );

          localStorage.setItem("difficultyData", "medium");

          if (res.status === 200) {
            window.location.href = "/main ";
          }
          return res.data;
        })
        .catch((err) => {
          console.log("Login error.", err);
        });
      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="my-10">
      <div className="flex flex-col w-full">
        <label className="py-1 text-sm text-primary" htmlFor="password">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="px-4 py-2 text-primary bg-white rounded-md outline-none focus:ring-2 focus:ring-primary focus:border-none border border-black"
        />
      </div>

      <div className="flex flex-col w-full">
        <label className="py-1 text-sm text-primary" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="px-4 py-2 text-primary bg-white rounded-md outline-none focus:ring-2 focus:ring-primary focus:border-none border border-black"
        />
      </div>

      <button
        className="my-2 bg-primary text-white px-4 py-2 rounded-md transition hover:translate-x-2 text-sm"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
