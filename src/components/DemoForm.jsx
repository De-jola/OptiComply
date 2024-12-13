/* eslint-disable react/prop-types */
import React, { useState } from "react";

const DemoForm = ({ onclose }) => {
  return (
    <section
      className="absolute inset-0 bg-black bg-opacity-50 z-50"
      onClick={onclose}
    >
      <div className="fixed top-3 right-3 left-3 text-center p-12 xl:p-16 w-[600px] xl:w-[644px] bg-[#FCFCFD] m-auto rounded-[20px] flex flex-col gap-[16px]">
        <div className="flex flex-col items-center gap-[10px] w-[468px] xl:w-[516px]">
          <p className="text-gray-600 text-sm xl:text-base">DEMO REQUEST</p>
          <h1 className="text-4xl xl:text-5xl font-header text-orange-600">
            Explore OptiComply
          </h1>
          <p className="text-gray-600  m-auto text-md xl:text-lg ">
            See how OptiComply can transform your compliance processes. Request
            a demo today!
          </p>
        </div>
        <form className="flex flex-col gap-6 w-[400px] xl:w-[434px] m-auto">
          <input
            type="text"
            placeholder="Your name"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px] rounded-lg"
          />
          <input
            type="text"
            placeholder="Your organization name"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px]  rounded-lg"
          />
          <input
            type="email"
            placeholder="Work email"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px]  rounded-lg"
          />
          <input
            type="number"
            placeholder="Your number"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px]  rounded-lg appearance-none"
          />
          <button
            type="submit"
            className="p-3 xl:py-[12px] xl:px-[24px] rounded-xl font-bold text-lg bg-orange-600 text-white"
          >
            Request a Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default DemoForm;
