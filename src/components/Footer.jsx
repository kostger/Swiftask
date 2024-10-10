import React from "react";
import SwiftaskLogo from "../assets/swiftask.png";
import GithubLogo from "../assets/github.png";

function Footer() {
  return (
    <div className="w-full flex items-center justify-between py-5  bottom-0 bg-black">
      <div className="flex flex-col justify-center items-center px-20">
        <img
          src={SwiftaskLogo}
          alt="Swiftask Logo"
          className="w-30 h-10 px-5"
        />
        <h1 className="text-white font-bold font-serif text-wrap text-2xl">
          Seemlesly handle all your tasks.
        </h1>
      </div>

      <div className="text-white flex flex-row justify-center items-center ">
        <img src={GithubLogo} alt="Github Logo" className="w-30 h-10 " />
        <a
          href="https://github.com/kostger/Swiftask"
          target="_blank"
          className="px-5 text-white hover:text-orange-500"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Footer;
