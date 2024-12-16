/* eslint-disable react/prop-types */
import React from "react";
import heroPlaceholder from "../assets/images/Frame 4.svg";
import Button from "./Button";
import Brands from "./Brands";

const Hero = ({ handleModal }) => {
  return (
    <>
      <section
        className="bg-lightgray"
        style={{
          background:
            "linear-gradient(270deg, rgba(214, 78, 15, 0.00) 33.05%, rgba(214, 78, 15, 0.70) 99.84%), url('/hero-image.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="px-4 py-16 flex flex-col gap-8 sm:gap-12 lg:px-20 xl:px-28 xl:py-20 2xl:px-32 3xl:px-36">
          {/* Text and Image Container */}
          <div className="flex flex-col items-center sm:gap-8 lg:flex-row lg:justify-between">
            {/* Text Section */}
            <div className="text-center lg:text-left lg:w-7/12">
              <h1 className="text-white text-2xl font-header leading-normal mb-4 sm:text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[70px]">
                Compliance Simplified: AI-Powered AML/CFT/CPF Solutions
              </h1>
              <p className="text-white text-sm mb-8 sm:text-base lg:text-lg lg:w-[473px] xl:text-[24px] xl:w-[636px] 2xl:text-[40px]">
                Stay ahead of regulatory challenges with our cost-effective,
                scalable, and user-friendly compliance software.
              </p>
              <Button location="hero" handleClick={handleModal} />
            </div>
            {/* Image Section */}
            <div className="w-full lg:w-5/12">
              <img
                src={heroPlaceholder}
                alt="Hero Placeholder"
                className="w-full"
              />
            </div>
          </div>
          {/* Brands Section */}
          <Brands />
        </div>
      </section>
    </>
  );
};

export default Hero;
