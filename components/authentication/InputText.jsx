import React from "react";
import { Field } from "formik";
import Image from "next/image";

const InputText = ({ id, type, icon }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-4">
      <Image alt={icon} src={`/icons/${icon}.svg`} width={20} height={20} />
      <Field
        name={id}
        className="text-center text-sm px-2 py-1 text-primary outline-none focus:border-b-2 border-b bg-white border-primary input-field placeholder:text-primary placeholder:text-xs"
        type={type}
        placeholder={id}
        autoComplete="off"
      />
    </div>
  );
};

export default InputText;
