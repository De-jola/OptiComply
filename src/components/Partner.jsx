import React from "react";
import PartnerImg from "../assets/images/PartnerImg.svg";
import checkIcon from "../assets/images/Check icon.svg";

const Partner = () => {
  return (
    <>
      <section>
        <div className="flex items-center xl:pr-28 pr-20 xl:gap-[86px] gap-[64px] 3xl:pr-36 bg-orange-50">
          <div className="w-[703px] 2xl:w-[803px] 3xl:w-[903px]">
            <img src={PartnerImg} className="w-full" />
          </div>
          <div className="w-1/2 ">
            <h2 className="xl:text-5xl text-4xl 2xl:text-6xl font-header text-[#39312F] 3xl:text-7xl mb-4">
              OptiComply is your trusted partner in the fight against financial
              crimes.
            </h2>
            <p className="text-[20px] mb-[32px] 3xl:text-[30px]">
              Our innovative solutions ensure seamless compliance with global
              and U.S. regulations while enhancing operational efficiency.
            </p>
            <ul className="flex flex-col gap-[16px] text-[18px] 3xl:text-[25px]">
              <li className="flex gap-[16px] items-center">
                <span>
                  <img src={checkIcon} />
                </span>
                AI-Driven Insights for Risk Management.
              </li>
              <li className="flex gap-[16px] items-center">
                <span>
                  <img src={checkIcon} />
                </span>
                Automated Reporting to Meet Regulatory Standards.
              </li>
              <li className="flex gap-[16px] items-center">
                <span>
                  <img src={checkIcon} />
                </span>
                Localized Support and Expertise.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
