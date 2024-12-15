import React from "react";
import teamData from "../data/teamData";

const Team = () => {
  return (
    <section className=" py-14 px-20 xl:py-20 xl:px-28">
      <div className="flex flex-col gap-8">
        <div className="text-center flex flex-col gap-[16px]">
          <h1 className="text-[#39312F] text-4xl xl:text-5xl font-header">
            Meet Our Team
          </h1>
          <p className="text-gray-600 w-[613px] m-auto xl:text-[20px]">
            We are a dedicated team of experienced professionals driven by
            expertise and commitment.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 items-center content-between gap-8">
          {teamData.map((item) => (
            <div
              className="p-12 flex flex-col justify-end items-start rounded-[20px] h-[480px] xl:h-[520px]"
              key={item.id}
              style={{
                background: `linear-gradient(180deg, rgba(236, 74, 10, 0.00) 50.5%, rgba(236, 74, 10, 0.80) 75%), url(${item.image}) lightgray no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h1 className="text-white text-[600] text-3xl">{item.name}</h1>
              <p className="text-white text-[16px]">{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;