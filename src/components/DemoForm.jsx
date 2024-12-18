/* eslint-disable react/prop-types */
import React, { useState } from "react";
import emailjs from "emailjs-com";

const DemoForm = ({ onclose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    organizationName: "",
    workEmail: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_h5z2j7l", // Replace with your EmailJS Service ID
        "template_pwlszy5", // Replace with your EmailJS Template ID
        formData,
        "OtrY0kHzDq-zSvVwR" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsLoading(false);
          onclose();

          alert("Email sent successfully");
        },
        (error) => {
          console.error("Error sending email:", error);
          setIsLoading(false);
          onclose();
          alert("Error occurred");
        }
      );
  };

  return (
    <section
      className="absolute inset-0 bg-black bg-opacity-50 z-50"
      onClick={onclose}
    >
      <div
        className="fixed top-3 right-3 left-3 text-center p-12 xl:p-16 lg:w-[600px] xl:w-[644px] bg-[#FCFCFD] m-auto rounded-[20px] flex flex-col gap-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center gap-[10px] lg:w-[468px] xl:w-[516px]">
          <p className="text-gray-600 text-sm xl:text-base">DEMO REQUEST</p>
          <h1 className="text-4xl xl:text-5xl font-header text-orange-600">
            Explore OptiComply
          </h1>
          <p className="text-gray-600  m-auto text-md xl:text-lg ">
            See how OptiComply can transform your compliance processes. Request
            a demo today!
          </p>
        </div>
        <form
          className="flex flex-col gap-6 lg:w-[400px] xl:w-[434px] m-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px] rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="organizationName"
            placeholder="Your organization name"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px]  rounded-lg"
            value={formData.organizationName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="workEmail"
            placeholder="Work email"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px]  rounded-lg"
            value={formData.workEmail}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Your number"
            className="block bg-gray-100 py-[10px] px-[17px] xl:py-[17px] xl:px-[24px]  rounded-lg appearance-none"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`p-3 xl:py-[12px] xl:px-[24px] rounded-xl font-bold text-lg ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-orange-600"
            } text-white`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Request a Demo"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default DemoForm;
