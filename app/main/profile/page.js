"use client";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/app/Context/store";
import ProfileIntroduction from "@/components/profile/ProfileIntroduction";
import ProfileStats from "@/components/profile/ProfileStats";
import withAuth from "@/lib/withAuth";
import { getProfileQuizInfo } from "@/api/profile";

const Profile = () => {
  const { user } = useGlobalContext();
  const [quizInfo, setQuizInfo] = useState({});

  useEffect(() => {
    getProfileQuizInfo(setQuizInfo);
  }, []);

  return (
    <div>
      <ProfileIntroduction user={user} />
      <ProfileStats quizInfo={quizInfo} />
    </div>
  );
};

export default withAuth(Profile);
