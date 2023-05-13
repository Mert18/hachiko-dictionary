import React from "react";

const ProfileIntroduction = ({ user }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="font-bold text-2xl p-4">
        Hello, <span className="text-primary">{user.username}</span>
      </h1>
      <p className="p-4 text-secondary">{user.email}</p>
    </div>
  );
};

export default ProfileIntroduction;
