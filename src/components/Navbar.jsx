/* eslint-disable react/prop-types */
import React from "react";
import Logo from "../assets/images/Logo.svg";
import Button from "./Button";

const Navbar = ({ handleClick }) => {
  return (
    <nav className="bg-orange-25">
      <div className="flex items-center justify-between py-4 xl:px-28 2xl:px-32 lg:px-20 3xl:px-36">
        <div>
          <img src={Logo} alt="OptiComply Logo" />
        </div>
        <div>
          <ul className="flex items-center gap-x-8 text-lg">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <Button location="nav" handleClick={handleClick} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
