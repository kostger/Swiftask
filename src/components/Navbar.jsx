import React from "react";
import SwiftaskLogo from "../assets/swiftask.png";

function Navbar() {
  return (
    <div
      className="w-full flex items-center justify-between py-5 fixed
      top-0 z-20 bg-black"
    >
      <img src={SwiftaskLogo} alt="Swiftask Logo" className="w-30 h-10 px-5" />
      <div className="text-white  ">
        <a href="#home" className="px-5 text-white hover:text-orange-500">
          Home
        </a>
        <a href="#about" className="px-5 text-white hover:text-orange-500">
          About
        </a>
        <a href="#services" className="px-5 text-white hover:text-orange-500">
          Services
        </a>
        <a href="#contact" className="px-5 text-white hover:text-orange-500">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
