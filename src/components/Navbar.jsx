import React, { useState } from "react";
import SwiftaskLogo from "../assets/swiftask.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="sm:px-16 px-6 w-full flex items-center py-5 fixed
      top-0 z-20 bg-black "
    >
      <div className="w-full flex justify-between items-center px-4">
        <img
          src={SwiftaskLogo}
          alt="Swiftask Logo"
          className="w-30 h-10 px-5"
        />
        <button
          className="text-white rounded-xl bg-green-400 md:hidden px-5"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <div
          className={`text-white flex flex-col md:flex-row ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="/" className="px-5 text-white hover:text-orange-500">
            Home
          </a>
          <a href="/about" className="px-5 text-white hover:text-orange-500">
            About
          </a>
          <a href="/profile" className="px-5 text-white hover:text-orange-500">
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
