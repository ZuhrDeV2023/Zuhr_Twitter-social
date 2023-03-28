import React from "react";
import userPro from '../assets/photo_2022-10-22_09-33-42.jpg'

const Profile = () => {
  return (
    <>
    <div className="flex flex-1">
      <div className="bg-white w-full shadow-md rounded-lg p-4 max-w-5xl">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full"
            src={userPro} 
            alt="Profile"
          />
        <h1 className="text-xl font-bold mt-4">@ZuhrStar50365</h1>
        <p className="text-gray-500">@WebDevloper ZuhrStar </p>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium">Recent classNameeets</h2>
          <div className="flex flex-col mt-4">
            <div className="border-b border-gray-300 pb-4">
              <p className="text-gray-500 text-sm">3 hours ago</p>
              <p className="text-black mt-2">
                The best way to predict the future is to create it.
              </p>
            </div>
            <div className="border-b border-gray-300 pb-4 mt-4">
              <p className="text-gray-500 text-sm">6 hours ago</p>
              <p className="text-black mt-2">
                The greatest glory in living lies not in never falling, but in rising every time we fall.
              </p>
            </div>
            <div className="border-b border-gray-300 pb-4 mt-4">
              <p className="text-gray-500 text-sm">12 hours ago</p>
              <p className="text-black mt-2">
                Your time is limited, don't waste it living someone else's life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Profile;