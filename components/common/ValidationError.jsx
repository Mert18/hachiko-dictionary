import React from "react";

const ValidationError = ({ error }) => {
  return (
    <div className="p-2 my-2 flex justify-start items-center border border-error max-w-full">
      <p className="text-xs text-error">{error}</p>
    </div>
  );
};

export default ValidationError;
