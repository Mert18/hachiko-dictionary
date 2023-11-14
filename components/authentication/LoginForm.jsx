"use client";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import Loader from "../common/Loader";
import Image from "next/image";
import { object, string } from "yup";
import { login } from "@/api/authentication";
import InputText from "./InputText";
import { useRouter } from "next/navigation";
import ValidationError from "../common/ValidationError";

const loginSchema = object().shape({
  email: string().email("Invalid email").required("Email is required."),
  password: string().required("password is required"),
});

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
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
      validationSchema={loginSchema}
      onSubmit={(values) => {
        login(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {showValidationErrors(errors, touched)}
          <InputText id="email" type="text" icon="mail" />
          <InputText id="password" type="password" icon="key" />

          <p>test@gmail.com</p>
          <p>test123</p>
          <div className={"flex justify-center items-center"}>
            <button
              className="my-2 text-white px-3 py-2 transition hover:translate-x-2"
              type="submit"
            >
              {loading ? (
                <Loader />
              ) : (
                <Image
                  alt={"door"}
                  src={"/icons/door_open.svg"}
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

export default LoginForm;
