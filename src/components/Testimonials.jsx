import React from "react";
import testimonialData from "../data/testimonialData";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <section className="px-4 py-8 lg:py-14 lg:px-20 xl:py-20 xl:px-28 bg-orange-50">
      <div className="flex flex-col gap-8">
        <h1 className="text-[#39312F] text-center font-header text-[28px] lg:text-4xl xl:text-5xl">
          What Our Clients say About Us
        </h1>
        <div className="flex flex-col gap-[24px] lg:grid grid-cols-3 lg:gap-6 ">
          {testimonialData.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col gap-6 bg-orange-100 p-8 rounded-[20px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
