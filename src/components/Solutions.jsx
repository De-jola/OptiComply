import React from "react";
import { motion } from "motion/react";
import solutionsData from "../data/solutionsData";
import SolutionImg from "../assets/images/SolutionsImg.svg";

const Solutions = () => {
  return (
    <>
      <section
        className="bg-orange-25 px-4 py-8  lg:px-28 lg:py-20"
        id="solutions"
      >
        <div className="flex flex-col gap-[24px] lg:gap-[48px]">
          <div className="text-center flex flex-col gap-4">
            <h1 className=" text-2xl lg:text-4xl xl:text-5xl text-[#39312F] font-header">
              Our Solutions
            </h1>
            <p className=" lg:w-[738px] m-auto text-gray-600 text-[14px] lg:text-lg xl:text-[20px]">
              OptiComply provides an integrated suite of solutions designed to
              automate and enhance compliance processes for financial
              institutions.
            </p>
          </div>
          <div className="flex flex-wrap content-start justify-between lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:text-left gap-6  lg:gap-[48px]">
            {solutionsData.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col gap-y-4 bg-orange-100 p-8 sm:items-left sm:rounded-[12px] lg:rounded-[20px] lg:items-start lg:w-auto  "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="bg-orange-600 w-[48px] xl:w-[64px] flex justify-center p-2 rounded-xl">
                  <img src={item.icon} />
                </div>
                <p className="text-[24px] lg:text-2xl xl:text-3xl font-bold text-orange-600">
                  {item.title}
                </p>
                <p className="text-gray-600 text-[14px] lg:text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="w-full "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={SolutionImg} className="w-full " />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
