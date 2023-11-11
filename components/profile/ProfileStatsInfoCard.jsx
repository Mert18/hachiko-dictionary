import React from "react";

const ProfileStatsInfoCard = ({ title, value }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-32 h-32 rounded-md bg-primary text-white m-2 flex justify-center items-center">
        <p className="text-xl font-bold">{value}</p>
      </div>
      <p className="text-xs">{title}</p>
    </div>
  );
};

export default ProfileStatsInfoCard;
