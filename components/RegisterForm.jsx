import React from "react";
import { useFormik } from "formik";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
        <label className="py-1 text-sm text-white" htmlFor="password">
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
        className="my-2 bg-white text-primary px-4 py-2 rounded-md transition hover:text-black text-sm"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
