import React from "react";
import teamData from "../data/teamData";
import { motion } from "motion/react";

const Team = () => {
  return (
    <section className=" px-4 py-8 lg:py-14 lg:px-20 xl:py-20 xl:px-28">
      <div className="flex flex-col gap-8">
        <div className="text-center flex flex-col gap-[16px]">
          <h1 className="text-[#39312F] text-[28px] lg:text-4xl xl:text-5xl font-header">
            Meet Our Team
          </h1>
          <p className="text-gray-600 lg:w-[613px] m-auto text-[14px] lg:text-[20px]">
            We are a dedicated team of experienced professionals driven by
            expertise and commitment.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] lg:grid grid-cols-3 grid-rows-2 lg:gap-8 lg:items-center  ">
          {teamData.map((item) => (
            <motion.div
              className="p-12 flex flex-col justify-end items-start rounded-[20px] h-[480px]   xl:w-[400px] xl:gap-y-12"
              key={item.id}
              style={{
                background: `linear-gradient(180deg, rgba(236, 74, 10, 0.00) 50.5%, rgba(236, 74, 10, 0.80) 75%), url(${item.image}) lightgray no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-white text-[600] text-3xl">{item.name}</h1>
              <p className="text-white text-[16px]">{item.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
