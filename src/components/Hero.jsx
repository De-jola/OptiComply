/* eslint-disable react/prop-types */
import React from "react";
import heroPlaceholder from "../assets/images/Frame 4.svg";
import Button from "./Button";
import Brands from "./Brands";

const Hero = ({ handleModal }) => {
  return (
    <>
      <section
        className="  "
        style={{
          background:
            "linear-gradient(270deg, rgba(214, 78, 15, 0.00) 33.05%, rgba(214, 78, 15, 0.70) 99.84%), url('/hero-image.png') lightgray 50% / cover no-repeat",
        }}
      >
        <div className="lg:py-14 lg:px-20 xl:py-20 xl:px-28 2xl:py-24 2xl:px-32 3xl:py-28 3xl:px-36 flex flex-col gap-16">
          <div className="flex lg:gap-8 2xl:justify-between items-center xl:justify-between">
            <div className="w-[636px] xl:w-[680px] 2xl:w-[736px] 3xl:w-[936px]">
              <h1 className="text-white 2xl:text-[68px] xl:text-[62px] lg:text-[54px] font-header leading-normal mb-4">
                Compliance Simplified: AI-Powered AML/CFT/CPF Solutions
              </h1>
              <p className="text-white text-2xl 3xl:text-[40px]  mb-8">
                Stay ahead of regulatory challenges with our cost effective,
                scalable, and user-friendly compliance software.
              </p>
              <Button location="hero" handleClick={handleModal} />
            </div>
            <div>
              <img src={heroPlaceholder} className="w-full" />
            </div>
          </div>
          <Brands />
        </div>
      </section>
    </>
  );
};

export default Hero;
