import React from "react";
import footerIcon from "../assets/images/footerIcon.svg";
import socialMediaIcons from "../assets/images/Social Media Container.svg";
import solutionsData from "../data/solutionsData";

const Footer = () => {
  return (
    <footer className="bg-[#39312F] text-white text-center  px-4 py-8 lg:py-14 lg:px-20 lg:text-left xl:py-20 xl:px-28 flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[32px] lg:flex lg:flex-row justify-between">
        <div className=" flex flex-col gap-[10px] lg:w-[276px] xl:w-[306px]  ">
          <div>
            <img
              src={footerIcon}
              className="w-[188px] m-auto lg:m-0 lg:w-[192px]"
            />
          </div>
          <div className="flex flex-col gap-[32px] ">
            <p>
              A world where financial compliance is seamless, secure, and
              accessible for all institutions.
            </p>
            <div>
              <img src={socialMediaIcons} className="m-auto lg:m-0" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] lg:flex lg:flex-row lg:justify-between gap-[58px] xl:gap-[64px] ">
          <div className="flex flex-col gap-4 xl:gap-20px ">
            <h1 className="xl:text-[20px] font-bold text-lg">Company</h1>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 xl:gap-20px ">
            <h1 className="xl:text-[20px] font-bold text-lg">Solutions</h1>
            <ul className="flex flex-col gap-[10px]">
              {solutionsData.map((item) => (
                <li key={item.id}>
                  <a href="#solutions">{item.title}</a>
                </li>
              ))}
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
        <hr className="sm:hidden lg:block"></hr>
        <p className="text-gray-300 text-center">
          Copyright © 2024 OptiComply | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
