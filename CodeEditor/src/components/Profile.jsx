import React from "react";
import { UserProfile } from "@clerk/clerk-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#121212] py-12 px-4 sm:px-6 lg:px-8 dark:text-white">
      <div className="max-w-4xl mx-auto text-center mb-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 dark:text-purple-400 mb-5">
        Edit Your Profile
      </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Manage your account settings, profile picture, email, and more.
        </p>
      </div>

      <div className="max-w-4xl mx-auto dark:bg-[#1e1e1e]">
        <UserProfile
          appearance={{
            elements: {
              card: "bg-transparent shadow-none",
              rootBox: "text-gray-900 dark:text-gray-100",
            },
            variables: {
              colorPrimary: "#7c3aed",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Profile;
