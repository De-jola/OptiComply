import React from "react";
import MissionImg from "../assets/images/MissionImg.svg";
import targetIcon from "../assets/images/mingcute_target-line.svg";
import eyeIcon from "../assets/images/flowbite_eye-outline.svg";

const Mission = () => {
  return (
    <>
      <section className="bg-[#39312F] text-white xl:px-28 xl:py-20 px-20 py-14 ">
        <div className="flex items-center justify-between gap-[20px]">
          <div className="flex flex-col gap-[48px] w-[544px] 2xl:w-[600px]">
            <div className="flex flex-col gap-[16px] bg-orange-50 p-6 rounded-[20px]">
              <div className="bg-white w-[40px] p-2 text-center rounded-xl">
                <img src={targetIcon} />
              </div>
              <h3 className="text-3xl font-bold text-orange-600">
                Our Mission
              </h3>
              <p className="text-[18px] text-gray-700">
                To empower financial institutions with cutting-edge solutions
                that ensure compliance and mitigate risks in the global
                financial system.
              </p>
            </div>
            <div className="flex flex-col gap-[16px] bg-orange-50 p-6 rounded-[20px]">
              <div className="bg-white w-[40px] p-2 text-center rounded-xl">
                <img src={eyeIcon} />
              </div>
              <h3 className="text-3xl font-bold text-orange-600">Our Vision</h3>
              <p className="text-[18px] text-gray-700">
                A world where financial compliance is seamless, secure, and
                accessible for all institutions.
              </p>
            </div>
          </div>
          <div className="w-[624px] 2xl:w-[660px]">
            <img src={MissionImg} className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
