/* eslint-disable react/prop-types */
import React from "react";
import heroPlaceholder from "../assets/images/Frame 4.svg";
import Button from "./Button";
import Brands from "./Brands";
import { motion } from "motion/react";

const Hero = ({ handleModal }) => {
  return (
    <>
      <section
        id="home"
        className="bg-lightgray"
        style={{
          background:
            "linear-gradient(270deg, rgba(214, 78, 15, 0.00) 33.05%, rgba(214, 78, 15, 0.70) 99.84%), url('/hero-image.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="px-4 py-16 flex flex-col gap-8 sm:gap-12 lg:px-20 xl:px-28 xl:py-20 2xl:px-32 3xl:px-36">
          {/* Text and Image Container */}
          <div className="flex flex-col items-center sm:gap-8 lg:flex-row lg:justify-between lg:gap-0">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-[473px] xl:w-[685px]">
              <p className="text-white text-[16px] font-[600] lg:text-[20px] xl:text-[24px] mb-2">
                Welcome to OptiComply IT Solutions
              </p>
              <h1 className="text-white text-2xl font-header leading-normal mb-4 sm:text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[70px]">
                Compliance Simplified: AI-Powered AML/CFT/CPF Solutions
              </h1>
              <p className="text-white font-[400] text-sm mb-8 sm:text-base lg:text-lg  xl:text-[24px] xl:w-[636px] font-body">
                Stay ahead of regulatory challenges with our cost-effective,
                scalable, and user-friendly compliance software.
              </p>
              <Button location="hero" handleClick={handleModal} />
            </div>
            {/* Image Section */}
            <motion.div
              className="w-auto "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={heroPlaceholder}
                alt="Hero Placeholder"
                className="w-full"
              />
            </motion.div>
          </div>
          {/* Brands Section */}
          <Brands />
        </div>
      </section>
    </>
  );
};

export default Hero;
