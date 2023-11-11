"use client";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/app/Context/store";
import axiosInstance from "@/lib/axiosInstance";
import ProfileIntroduction from "@/components/profile/ProfileIntroduction";
import ProfileStats from "@/components/profile/ProfileStats";
import withAuth from "@/lib/withAuth";

const Profile = () => {
  const { user } = useGlobalContext();
  const [quizInfo, setQuizInfo] = useState({});

  const getQuizInfo = async () => {
    axiosInstance
      .get("/api/v1/quiz/my-quizzes")
      .then((res) => {
        setQuizInfo(res.data.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getQuizInfo();
  }, []);

  return (
    <div>
      <ProfileIntroduction user={user} />
      <ProfileStats quizInfo={quizInfo} />
    </div>
  );
};

export default withAuth(Profile);
