import React from "react";
import { motion } from "motion/react";
import featuresData from "../data/featuresData";

const Features = () => {
  return (
    <>
      <section
        className="bg-orange-50 px-4 py-8 lg:py-14 lg:px-20 xl:py-20 xl:px-28"
        id="features"
      >
        <div className="flex flex-col gap-8">
          <div className="text-center flex flex-col gap-[16px]">
            <h1 className="text-[#39312F] text-[28px] lg:text-4xl xl:text-5xl font-header">
              Browse our set of Features
            </h1>
            <p className="text-gray-700 text-[14px] lg:text-[20px] lg:w-[710px] m-auto">
              Designed for ease of use, scalability, and robust compliance,
              OptiComply offers unparalleled features.
            </p>
          </div>
          <div className="flex flex-col gap-[6] lg:grid grid-cols-2 grid-rows-3 gap-8 text-white">
            {featuresData.map((item) => (
              <motion.div
                key={item.id}
                className={`bg-cover bg-no-repeat bg-lightgray  px-12 py-20 sm:rounded-[12px] lg:rounded-[20px] ${
                  item.id === 1 ? "sm:h-[390px] row-span-2" : ""
                } lg:h-auto`}
                style={{
                  background: `${item.background}`,
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="text-[20px] lg:text-3xl">{item.title}</p>
                <p className="text-gray-300 w-full lg:w-3/5 text-[14px] lg:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
