import React from "react";
import profileImg from "../../assets/profileImg.png";

function Profile() {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full h-[700px] p-10">
      <h1 className="text-center text-4xl text-orange-400 font-bold">
        Profile
      </h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="bg-white w-96 h-96 rounded-full">
          <img src={profileImg} alt="profile-pic" />
        </div>
        <h2 className="text-2xl font-semibold">
          Name: <span>John Doe</span>
        </h2>
        <p className="text-lg text-gray-600">
          Email: <span>john.doe@example.com</span>
        </p>
        <h2 className="text-2xl font-semibold">
          Phone: <span>+12 345678910</span>
        </h2>
      </div>
    </div>
  );
}

export default Profile;
