"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/app/Context/store";

const Profile = () => {
  const { user } = useGlobalContext();

  return <div>{user.username}</div>;
};

export default Profile;
