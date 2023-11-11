import React from "react";
import ProfileStatsInfoCard from "./ProfileStatsInfoCard";

const ProfileStatsQuizInfo = ({ quizInfo }) => {
  return (
    <div className="flex flex-wrap">
      <ProfileStatsInfoCard title={"Games Played"} value={quizInfo.gameCount} />
      <ProfileStatsInfoCard
        title={"Correct Answers"}
        value={quizInfo.correctCount}
      />
      <ProfileStatsInfoCard
        title={"Incorrect Answers"}
        value={quizInfo.incorrectCount}
      />
      <ProfileStatsInfoCard
        title={"Success Ratio"}
        value={quizInfo.correctRate}
      />
    </div>
  );
};

export default ProfileStatsQuizInfo;
