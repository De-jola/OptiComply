import React from "react";
import loveIcon from "../assets/images/hugeicons_in-love.svg";
import products from "../assets/images/eos-icons_products.svg";
import team from "../assets/images/ant-design_team-outlined.svg";
import arrowGrowth from "../assets/images/fluent_arrow-growth-20-filled.svg";

const Results = () => {
  return (
    <>
      <section className="px-28 py-20 bg-orange-25">
        <div className="flex flex-col gap-[48px]">
          <h3
            className="text-center font-header text-[#39312F]
           text-4xl xl:text-5xl"
          >
            Our results in numbers
          </h3>
          <div className="flex justify-center justify-around">
            <div className="flex flex-col gap-[32px] items-center text-5xl xl:text-[64px] font-header">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={loveIcon} />
              </div>
              <div className="text-center">
                <h2 className="inline  text-[#39312F]">99</h2>
                <span className="text-orange-100">%</span>
                <p className="font-body text-sm text-[#39312F]">
                  Customer Satisfaction
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-center text-5xl font-header xl:text-[64px] ">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={products} />
              </div>
              <div className="text-center">
                <h2 className="inline  text-[#39312F]">100</h2>
                <span className="text-orange-100">+</span>
                <p className="font-body text-sm text-[#39312F]">
                  Company Solutions
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-center font-header  text-5xl xl:text-[64px] ">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={team} />
              </div>
              <div className="text-center">
                <h2 className="inline  text-[#39312F]">25</h2>
                <span className="text-orange-100">+</span>
                <p className="font-body text-sm text-[#39312F]">Team Members</p>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-center font-header  text-5xl xl:text-[64px]">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={arrowGrowth} />
              </div>
              <div className="text-center">
                <h2 className="inline  text-[#39312F]">240</h2>
                <span className=" text-orange-100 ">%</span>
                <p className="font-body text-sm text-[#39312F]">
                  Company Growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Results;
