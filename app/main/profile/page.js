"use client";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/app/Context/store";
import axiosInstance from "@/lib/axiosInstance";
import ProfileIntroduction from "@/components/ProfileIntroduction";
import ProfileStats from "@/components/ProfileStats";

const Profile = () => {
  const { user } = useGlobalContext();
  const [quizInfo, setQuizInfo] = useState({});

  const getQuizInfo = async () => {
    axiosInstance
      .get("/api/v1/quiz/my-quizzes")
      .then((res) => {
        console.log("uiz info: ", res.data);
        setQuizInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

export default Profile;
