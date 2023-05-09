import React from "react";
import { useFormik } from "formik";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
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
