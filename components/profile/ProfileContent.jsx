"use client"
import { getProfileQuizInfo } from "@/api/profile";
import { useGlobalContext } from "@/app/Context/store";
import React, {useState, useEffect} from "react";
import ProfileIntroduction from "./ProfileIntroduction";
import ProfileStats from "./ProfileStats";
import withAuth from "@/lib/withAuth";

const ProfileContent = () => {
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

export default withAuth(ProfileContent);
