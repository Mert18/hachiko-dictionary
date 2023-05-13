import React from "react";
import ProfileStatsQuizInfo from "./ProfileStatsQuizInfo";

const ProfileStats = ({ quizInfo }) => {
  return (
    <div className="text-primary">
      <div>
        <p className="font-bold uppercase">Quiz Game Stats</p>
        <ProfileStatsQuizInfo quizInfo={quizInfo} />
      </div>
    </div>
  );
};

export default ProfileStats;
