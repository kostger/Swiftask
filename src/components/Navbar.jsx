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
        <button className="text-white md:hidden px-5" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`text-white md:flex ${isOpen ? "block" : "hidden"}`}>
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
    </nav>
  );
}

export default Navbar;
