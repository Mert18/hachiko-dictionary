import React from "react";

const ProfileStatsInfoCard = ({ title, value }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-xs">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default ProfileStatsInfoCard;
