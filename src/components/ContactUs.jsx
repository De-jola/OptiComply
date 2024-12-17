import React from "react";
import email from "../assets/images/emailIcon.svg";
import phone from "../assets/images/phoneIcon.svg";
import location from "../assets/images/locationIcon.svg";
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <section id="contact">
      <div
        className="bg-cover px-4 py-8 lg:bg-left lg:py-14 lg:px-20 xl:py-20 xl:px-28 lg:flex justify-end"
        style={{
          background:
            'linear-gradient(0deg, rgba(236, 74, 10, 0.10) 0%, rgba(236, 74, 10, 0.10) 100%), url("/Contact us.png") lightgray no-repeat',
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      >
        <motion.div
          className="bg-white flex flex-col gap-6 px-[24px] py-[48px] lg:p-16 lg:w-[498px] rounded-[20px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col gap-[12px] lg:gap-6 sm:text-center lg:text-left">
            <h1 className="text-[#39312F] text-[32px] lg:text-4xl xl:text-5xl font-header">
              Contact Us
            </h1>
            <p className="text-gray-600 text-[14px] lg:text-base xl:text-lg">
              Have questions or want to see our solutions in action? Get in
              touch with our team today.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-[10px] bg-orange-100 rounded-lg w-[38px]">
                <img src={email} />
              </div>
              <p className="text-gray-600 sm:text-[14px] lg:text-base">
                contact@opticomply.com
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-[10px] bg-orange-100 rounded-lg w-[38px]">
                <img src={phone} />
              </div>
              <p className="text-gray-600 sm:text-[14px] lg:text-base">
                +234 800 000 0000
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-[10px] bg-orange-100 rounded-lg w-[38px]">
                <img src={location} />
              </div>
              <p className="text-gray-600 sm:text-[14px] lg:text-base">
                794 Mcallister Street, Yaba, Lagos, Nigeria.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
