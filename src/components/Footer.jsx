import React from "react";
import footerIcon from "../assets/images/footerIcon.svg";
import socialMediaIcons from "../assets/images/Social Media Container.svg";

const Footer = () => {
  return (
    <footer className="bg-[#39312F] text-white py-14 px-20 xl:py-20 xl:px-28 flex flex-col gap-[32px]">
      <div className="flex justify-between">
        <div className="w-[276px] xl:w-[306px] flex flex-col gap-[10px] ">
          <div>
            <img src={footerIcon} />
          </div>
          <div className="flex flex-col gap-[32px] ">
            <p>
              A world where financial compliance is seamless, secure, and
              accessible for all institutions.
            </p>
            <div>
              <img src={socialMediaIcons} />
            </div>
          </div>
        </div>
        <div className="flex gap-[58px] xl:gap-[64px] justify-between">
          <div className="flex flex-col gap-4 xl:gap-20px ">
            <h1 className="xl:text-[20px] font-bold text-lg">Company</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>About</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 xl:gap-20px ">
            <h1 className="xl:text-[20px] font-bold text-lg">Solutions</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>AML/CFT Modules</li>
              <li>AI and Machine Learning</li>
              <li>Watchlist and PEP Screening</li>
              <li>Customer Risk Rating Modules</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 xl:gap-20px ">
            <h1 className="xl:text-[20px] font-bold text-lg">Legal</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <hr></hr>
        <p className="text-gray-300 text-center">
          Copyright © 2024 OptiComply | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
