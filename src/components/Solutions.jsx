import React from "react";
import { motion } from "motion/react";
import report from "../assets/images/mdi_report-box-plus-outline.svg";
import aiIcon from "../assets/images/hugeicons_ai-network.svg";
import binoculars from "../assets/images/fluent-mdl2_see-do.svg";
import customer from "../assets/images/ix_customer.svg";
import SolutionImg from "../assets/images/SolutionsImg.svg";

const Solutions = () => {
  return (
    <>
      <section
        className="bg-orange-25 px-4 py-8 lg:py-14 lg:px-20 xl:px-28 xl:py-20"
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
          <div className="flex flex-wrap content-start   sm:text-center  justify-center lg:text-left gap-6 lg:gap-8 xl:gap-[48px]">
            <motion.div
              className="flex flex-col gap-y-4 bg-orange-100 p-8 sm:items-center sm:rounded-[12px] lg:rounded-[20px] lg:items-start lg:w-[448px] xl:h-[282px]  xl:w-[584px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-orange-600 w-[48px] xl:w-[64px] flex justify-center p-2 rounded-xl">
                <img src={report} />
              </div>
              <h1 className="text-[24px] lg:text-2xl xl:text-3xl font-bold text-orange-600">
                AML/CFT Modules
              </h1>
              <p className="text-gray-600 text-[14px] lg:text-lg">
                We provide modules like Currency Transaction Reports (CTR) and
                Suspicious Activity Reports (SAR) automate reporting processes,
                ensuring accuracy and compliance.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 bg-orange-100 p-8 sm:rounded-[12px] lg:rounded-[20px] sm:items-center lg:items-start lg:w-[448px] lg:h-[288px]  xl:w-[584px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-orange-600 w-[48px] xl:w-[64px] flex justify-center p-2 rounded-xl">
                <img src={aiIcon} />
              </div>
              <h1 className="text-[24px] lg:text-2xl xl:text-3xl font-bold text-orange-600">
                AI and Machine Learning
              </h1>
              <p className="text-gray-600 text-[14px] lg:text-lg">
                Leveraging AI for anomaly detection, predictive risk analysis,
                and enhanced decision-making.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 bg-orange-100 p-8 sm:rounded-[12px] lg:rounded-[20px] sm:items-center lg:items-start lg:w-[448px] lg:h-[288px] xl:h-[282px] xl:w-[584px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-orange-600 w-[48px] xl:w-[64px] flex justify-center p-2 rounded-xl">
                <img src={binoculars} />
              </div>
              <h1 className="text-[24px] lg:text-2xl xl:text-3xl font-bold text-orange-600">
                Watchlist and PEP Screening
              </h1>
              <p className="text-gray-600 text-[14px] lg:text-lg">
                We provide automated real-time screening against global
                watchlists and PEP databases to identify high-risk customers.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4 bg-orange-100 p-8 sm:rounded-[12px] lg:rounded-[20px] sm:items-center lg:items-start lg:w-[448px] xl:h-[282px] xl:w-[584px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-orange-600 w-[48px] xl:w-[64px] flex justify-center p-2 rounded-xl">
                <img src={customer} />
              </div>
              <h1 className="text-[24px] lg:text-2xl xl:text-3xl font-bold text-orange-600">
                Customer Risk Rating Modules
              </h1>
              <p className="text-gray-600 text-[14px] lg:text-lg">
                Our Customer Risk Rating (CRR) module leverages advanced AI and
                machine learning to evaluate customer profiles and classify them
                into Low, Medium, or High risk categories.
              </p>
            </motion.div>
          </div>
          <div className="w-full ">
            <img src={SolutionImg} className="w-full " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
