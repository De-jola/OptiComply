import React from "react";
import testimonialData from "../data/testimonialData";

const Testimonials = () => {
  return (
    <section className="py-14 px-20 xl:py-20 xl:px-28 bg-orange-50">
      <div className="flex flex-col gap-8">
        <h1 className="text-[#39312F] text-center font-header text-4xl xl:text-5xl">
          What Our Clients say About Us
        </h1>
        <div className="grid grid-cols-3 gap-6 ">
          {testimonialData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 bg-orange-100 p-8 rounded-[20px]"
            >
              <div>
                <img src={item.starImg} />
              </div>
              <p className="text-gray-600">{item.testimonial}</p>
              <div className="flex items-center gap-[18px]">
                <div className="w-[48px] ">
                  <img src={item.image} className="rounded-[64px]" />
                </div>
                <div>
                  <h1 className="text-orange-600 text-[18px] font-bold">
                    {item.name}
                  </h1>
                  <p>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
