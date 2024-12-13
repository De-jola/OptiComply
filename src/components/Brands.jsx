import React from "react";
import Google from "../assets/images/Google.svg";
import Facebook from "../assets/images/Facebook.svg";
import Twitch from "../assets/images/Twitch.svg";
import YouTube from "../assets/images/YouTube.svg";
import Pinterest from "../assets/images/Pinterest.svg";

const Brands = () => {
  return (
    <div className="text-center flex flex-col gap-[32px]">
      <h3 className="text-white font-header lg:text-[38px] xl:text-[42px] 3xl:text-5xl ">
        Trusted by 100+ companies around Nigeria
      </h3>
      <div className="flex items-center justify-center gap-14 xl:justify-around">
        <div>
          <img src={Twitch} />
        </div>
        <div>
          <img src={Facebook} />
        </div>
        <div>
          <img src={Google} />
        </div>
        <div>
          <img src={YouTube} />
        </div>
        <div>
          <img src={Pinterest} />
        </div>
      </div>
      <p className="text-gray-300 xl:text-[20px] xl:w-[894px] w-[800px] m-auto">
        Join the growing community of professionals that have already
        experienced the transformative power of our solutions.
      </p>
    </div>
  );
};
export default Brands;
