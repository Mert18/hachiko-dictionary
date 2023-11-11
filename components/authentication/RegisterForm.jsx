"use client";
import React, { useState } from "react";
import Loader from "../common/Loader";
import Image from "next/image";

import ValidationError from "../common/ValidationError";
import InputText from "./InputText";
import { object, string, ref } from "yup";
import { Form, Formik } from "formik";
import { register } from "@/api/authentication";

const registerSchema = object().shape({
  username: string()
    .min(3, "username should be at least 3 characters.")
    .max(20, "username cannot be more than 20 characters.")
    .required("username is required"),
  email: string().email("Invalid email").required("Email is required."),
  password: string()
    .required("password is required")
    .min(6, "Password must have at least 6 characters"),
  confirmPassword: string()
    .required("confirmPassword is required")
    .oneOf([ref("password")], "Passwords does not match"),
});

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const showValidationErrors = (errors, touched) => {
    for (const error in errors) {
      if (error.length > 0 && touched[error]) {
        return <ValidationError error={errors[error]} />;
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={(values) => {
        register(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {showValidationErrors(errors, touched)}
          <InputText id="username" type="text" icon="badge" />
          <InputText id="email" type="text" icon="mail" />
          <InputText id="password" type="password" icon="key" />
          <InputText id="confirmPassword" type="password" icon="key" />

          <div className={"flex justify-center items-center"}>
            <button
              className="my-2 text-white px-3 py-2 transition hover:translate-x-2"
              type="submit"
            >
              {loading ? (
                <Loader />
              ) : (
                <Image
                  alt={"user"}
                  src={"/icons/group_add.svg"}
                  width={20}
                  height={20}
                />
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
