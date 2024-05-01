import React from "react";
import { Field } from "formik";
import Image from "next/image";

const InputText = ({ id, type, icon }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-6">
      <div className="flex items-center justify-between w-full">
          <Image alt={icon} src={`/icons/${icon}.png`} width={18} height={18} />
          <p className="text-red text-xs ml-2">{id}</p>
      </div>
      <Field
        name={id}
        className="text-center text-sm px-2 py-1 text-red outline-none focus:border-b-2 border-b bg-white border-red input-field"
        type={type}
        autoComplete="off"
      />
    </div>
  );
};

export default InputText;
