import PageHeader from "@/components/PageHeader";
import ProfileContent from "@/components/profile/ProfileContent";
import React from "react";

export const metadata = {
  title: "Hachiko Dictionary | Profile"
}

const Profile = () => {
  return (
    <div className="w-full">
      <PageHeader title="Profile" />
      <ProfileContent />
    </div>
  );
};

export default Profile;
