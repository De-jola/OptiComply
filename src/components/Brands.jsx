import React from "react";
import Google from "../assets/images/Google.svg";
import Facebook from "../assets/images/Facebook.svg";
import Twitch from "../assets/images/Twitch.svg";
import YouTube from "../assets/images/YouTube.svg";
import Pinterest from "../assets/images/Pinterest.svg";

const Brands = () => {
  return (
    <div className="text-center flex flex-col gap-8 px-4 sm:gap-10 md:gap-12 lg:gap-14">
      {/* Header */}
      <h3 className="text-white font-header text-[28px] leading-tight sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 3xl:text-5xl">
        Trusted by 100+ companies around Nigeria
      </h3>

      {/* Brand Logos */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-14">
        <div className="">
          <img src={Twitch} alt="Twitch" className="w-full h-auto" />
        </div>
        <div className="">
          <img src={Facebook} alt="Facebook" className="w-full h-auto" />
        </div>
        <div className="">
          <img src={Google} alt="Google" className="w-full h-auto" />
        </div>
        <div className="">
          <img src={YouTube} alt="YouTube" className="w-full h-auto" />
        </div>
        <div className="">
          <img src={Pinterest} alt="Pinterest" className="w-full h-auto" />
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl lg:w-[646px] lg:text-[18px] xl:w-[894px] xl:text-[20px] mx-auto text-gray-200">
        Join the growing community of professionals that have already
        experienced the transformative power of our solutions.
      </p>
    </div>
  );
};

export default Brands;
