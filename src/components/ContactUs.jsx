import React from "react";
import email from "../assets/images/emailIcon.svg";
import phone from "../assets/images/phoneIcon.svg";
import location from "../assets/images/locationIcon.svg";

const ContactUs = () => {
  return (
    <section>
      <div
        className="bg-cover bg-left py-14 px-20 xl:py-20 xl:px-28 flex justify-end"
        style={{
          background:
            'linear-gradient(0deg, rgba(236, 74, 10, 0.10) 0%, rgba(236, 74, 10, 0.10) 100%), url("/Contact us.png") lightgray no-repeat',
          backgroundSize: "cover",
          backgroundPosition: "top left",
        }}
      >
        <div className="bg-white flex flex-col gap-6 p-16 w-[498px] rounded-[20px]">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#39312F] text-4xl xl:text-5xl font-header">
              Contact Us
            </h1>
            <p className="text-gray-600 xl:text-lg">
              Have questions or want to see our solutions in action? Get in
              touch with our team today.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="p-[10px] bg-orange-100 rounded-lg w-[38px]">
                <img src={email} />
              </div>
              <p className="text-gray-600">contact@opticomply.com</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-[10px] bg-orange-100 rounded-lg w-[38px]">
                <img src={phone} />
              </div>
              <p className="text-gray-600">+234 800 000 0000</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-[10px] bg-orange-100 rounded-lg w-[38px]">
                <img src={location} />
              </div>
              <p className="text-gray-600">
                794 Mcallister Street, Yaba, Lagos, Nigeria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
