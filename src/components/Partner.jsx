import React from "react";
import PartnerImg from "../assets/images/PartnerImg.svg";
import checkIcon from "../assets/images/Check icon.svg";

const Partner = () => {
  return (
    <>
      <section className="bg-orange-50  lg:pr-20 xl:pr-28 3xl:pr-36">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[64px]">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img src={PartnerImg} alt="Partner" className="w-full h-auto" />
          </div>

          {/* Text Section */}
          <div className="text-center sm:pb-8 sm:px-4 lg:w-1/2 lg:text-left">
            <h2 className="text-[#39312F] text-3xl sm:text-4xl lg:text-[40px] lg:w-[400px] xl:text-5xl xl:w-[539px] 2xl:text-6xl 3xl:text-7xl font-header mb-4">
              OptiComply is your trusted partner in the fight against financial
              crimes.
            </h2>
            <p className="text-base sm:text-lg lg:text-[18px] xl:text-[20px] 3xl:text-2xl text-gray-800 mb-8">
              Our innovative solutions ensure seamless compliance with global
              and U.S. regulations while enhancing operational efficiency.
            </p>

            {/* Features List */}
            <ul className="flex flex-col gap-4 text-sm text-left sm:text-base lg:text-base lg:w-[356px] xl:w-[495px] xl:text-[18px] 3xl:text-xl">
              <li className="flex gap-4 items-start">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>AI-Driven Insights for Risk Management.</span>
              </li>
              <li className="flex gap-4 items-start">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>Automated Reporting to Meet Regulatory Standards.</span>
              </li>
              <li className="flex gap-4 items-start">
                <img
                  src={checkIcon}
                  alt="Check Icon"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span>Localized Support and Expertise.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
