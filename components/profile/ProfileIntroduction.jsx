import React from "react";

const ProfileIntroduction = ({ user }) => {
  return (
    <div className="flex flex-col justify-start items-center text-red">
      <h1 className="font-bold text-2xl p-4">
        Hello, <span>{user.username}</span>
      </h1>
      <p className="p-4 text-red">{user.email}</p>
    </div>
  );
};

export default ProfileIntroduction;
