import React from "react";

const Features = () => {
  return (
    <>
      <section className="bg-orange-50 py-14 px-20 xl:py-20 xl:px-28">
        <div className="flex flex-col gap-8">
          <div className="text-center flex flex-col gap-[16px]">
            <h1 className="text-[#39312F] text-4xl xl:text-5xl font-header">
              Browse our set of Features
            </h1>
            <p className="text-gray-700 text-[20px] w-[710px] m-auto">
              Designed for ease of use, scalability, and robust compliance,
              OptiComply offers unparalleled features.
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-8 text-white">
            <div
              className="bg-cover bg-no-repeat bg-lightgray row-span-2 px-12 py-20 rounded-[20px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(1, 38, 112, 0.70) 0%, rgba(1, 38, 112, 0.00) 100%), url("/FeatureImg3.png") lightgray 50%',
              }}
            >
              <h1 className="text-3xl">AI-Driven Insights</h1>
              <p className="text-gray-300 w-3/5">
                Identify risks before they become issues with predictive
                analytics.
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-lightgray px-12 py-20  rounded-[20px]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(57, 49, 47, 0.80) 0%, rgba(57, 49, 47, 0.00) 100%), url("/FeatureImg2.png") lightgray 50%',
              }}
            >
              <h1 className="text-3xl">User-Friendly Interface</h1>
              <p className="text-gray-300">
                Navigate compliance tasks with ease.
              </p>
            </div>
            <div
              className="bg-cover bg-no-repeat bg-lightgray px-12 py-20  rounded-[20px]"
              style={{
                background:
                  'linear-gradient(90deg, rgba(57, 49, 47, 0.70) 0%, rgba(57, 49, 47, 0.00) 100%), url("/FeatureImg1.png") lightgray 50%',
              }}
            >
              <h1 className="text-3xl">Scalability</h1>
              <p className="text-gray-300 ">
                Expand functionality with pre-integrated modules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
