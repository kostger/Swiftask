import React from "react";
import SwiftaskLogo from "../assets/swiftask.png";
import GithubLogo from "../assets/github.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Swiftask. All rights reserved.</p>
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
    </footer>
  );
}

export default Footer;
