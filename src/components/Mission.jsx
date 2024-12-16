import React from "react";
import MissionImg from "../assets/images/MissionImg.svg";
import targetIcon from "../assets/images/mingcute_target-line.svg";
import eyeIcon from "../assets/images/flowbite_eye-outline.svg";

const Mission = () => {
  return (
    <>
      <section className="bg-[#39312F] text-white p-6 sm:px-4 sm:py-8 lg:py-14 lg:px-20 xl:px-28 xl:py-20">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-[48px]">
          {/* Mission and Vision Cards */}
          <div className="flex flex-col gap-8 lg:w-1/2 sm:gap-6 lg:gap-[40px] xl:gap-[48px]">
            {/* Mission Card */}
            <div className="bg-orange-50 p-6 sm:rounded-[12px] lg:rounded-2xl flex flex-col gap-4">
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl">
                <img src={targetIcon} alt="Mission Icon" />
              </div>
              <h3 className="text-xl sm:text-[20px] lg:text-3xl xl:text-[30px] font-bold text-orange-600">
                Our Mission
              </h3>
              <p className="text-sm sm:text-[14px] lg:text-lg xl:text-[18px]  text-gray-700">
                To empower financial institutions with cutting-edge solutions
                that ensure compliance and mitigate risks in the global
                financial system.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-orange-50 p-6 sm:rounded-[12px] lg:rounded-2xl flex flex-col gap-4">
              <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl">
                <img src={eyeIcon} alt="Vision Icon" />
              </div>
              <h3 className="text-xl sm:text-[20px] lg:text-3xl xl:text-[30px] font-bold text-orange-600">
                Our Vision
              </h3>
              <p className="text-sm sm:text-[14px] lg:text-lg xl:text-[18px] text-gray-700">
                A world where financial compliance is seamless, secure, and
                accessible for all institutions.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={MissionImg}
              alt="Mission Illustration"
              className="w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
