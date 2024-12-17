import React from "react";
import { motion } from "motion/react";

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
          <div className="flex flex-col gap-[6] lg:grid grid-cols-2 grid-rows-2 gap-8 text-white">
            <motion.div
              className="bg-cover bg-no-repeat bg-lightgray row-span-2 px-12 py-20 sm:rounded-[12px] lg:rounded-[20px] sm:h-[390px] lg:h-auto"
              style={{
                background:
                  'linear-gradient(180deg, rgba(1, 38, 112, 0.70) 0%, rgba(1, 38, 112, 0.00) 100%), url("/FeatureImg3.png") lightgray 50%',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[20px] lg:text-3xl">AI-Driven Insights</h1>
              <p className="text-gray-300 w-full lg:w-3/5 text-[14px] lg:text-base">
                Identify risks before they become issues with predictive
                analytics.
              </p>
            </motion.div>
            <motion.div
              className="bg-cover bg-no-repeat bg-lightgray px-12 py-20 sm:rounded-[12px] lg:rounded-[20px] sm:h-[233.270px] lg:h-[auto]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(57, 49, 47, 0.80) 0%, rgba(57, 49, 47, 0.00) 100%), url("/FeatureImg2.png") lightgray 50%',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[20px] lg:text-3xl">
                User-Friendly Interface
              </h1>
              <p className="text-gray-300 text-[14px] lg:text-base">
                Navigate compliance tasks with ease.
              </p>
            </motion.div>
            <motion.div
              className="bg-cover bg-no-repeat bg-lightgray px-12 py-20 sm:rounded-[12px] lg:rounded-[20px] lg:h-[auto]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(57, 49, 47, 0.70) 0%, rgba(57, 49, 47, 0.00) 100%), url("/FeatureImg1.png") lightgray 50%',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-[20px] lg:text-3xl">Scalability</h1>
              <p className="text-gray-300 text-[14px] lg:text-base">
                Expand functionality with pre-integrated modules.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
