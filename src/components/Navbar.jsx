/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import hamburgerMenu from "../assets/images/hamburgerMenu.svg";
import Button from "./Button";

const Navbar = ({ handleClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="bg-orange-25">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-20 xl:px-28 2xl:px-32 3xl:px-36">
        {/* Logo */}
        <div>
          <img
            src={Logo}
            alt="OptiComply Logo"
            className="sm:w-[124px] lg:w-[192px]"
          />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className=" lg:hidden" onClick={handleShowMenu}>
          <img src={hamburgerMenu} alt="Menu" className=" cursor-pointer" />
        </div>

        {/* Navigation Links for Larger Screens */}
        <ul
          className={`${
            showMenu
              ? "sm:-translate-x-0 transition-transform duration-300 ease-in-out"
              : "sm:-translate-x-[-240px] transition-transform duration-300 ease-in-out"
          }  sm:flex sm:flex-col sm:gap-[32px] sm:bg-white sm:p-[32px] sm:fixed sm:right-0 sm:top-[-2px] sm:h-full sm:items-start lg:flex lg:flex-row lg:bg-0 lg:w-auto lg:h-auto items-center gap-4 md:gap-6 lg:gap-8 lg:p-0 lg:static lg:items-center lg:translate-x-0 text-base md:text-lg`}
        >
          <li
            className={`${showMenu ? "block" : "hidden"} 
          
          `}
            onClick={handleCloseMenu}
          >
            X
          </li>
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <Button location="nav" handleClick={handleClick} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
