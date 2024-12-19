import React from "react";
import MissionImg from "../assets/images/MissionImg.svg";
import targetIcon from "../assets/images/mingcute_target-line.svg";
import eyeIcon from "../assets/images/flowbite_eye-outline.svg";
import { motion } from "motion/react";

const Mission = () => {
  return (
    <>
      <section className="bg-[#39312F] text-white p-6 sm:px-4 sm:py-8 lg:py-14 lg:px-20 xl:px-28 xl:py-20">
        <div className="flex flex-col-reverse gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:items-center lg:gap-[48px]">
          {/* Mission and Vision Cards */}
          <div className="row-span-2 flex flex-col gap-[40px]">
            {/* Mission Card */}
            <motion.div
              className="bg-orange-50 p-6 sm:rounded-[12px] lg:rounded-2xl flex flex-col gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
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
            </motion.div>
            {/* Vision Card */}
            <motion.div
              className="bg-orange-50 p-6 sm:rounded-[12px] lg:rounded-2xl flex flex-col gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
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
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="lg:row-span-2 lg:h-[492px]"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={MissionImg}
              alt="Mission Illustration"
              className="w-full self-stretch lg:h-[492px]"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Mission;
