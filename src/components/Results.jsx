import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import loveIcon from "../assets/images/hugeicons_in-love.svg";
import products from "../assets/images/eos-icons_products.svg";
import team from "../assets/images/ant-design_team-outlined.svg";
import arrowGrowth from "../assets/images/fluent_arrow-growth-20-filled.svg";

const Results = () => {
  const [counts, setCounts] = useState({
    satisfaction: 0,
    solutions: 0,
    team: 0,
    growth: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false); // To ensure animation runs only once

  const { ref, inView } = useInView({
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  const countNumbers = (key, target, duration) => {
    const step = target / (duration / 50); // Adjust increment based on duration
    let current = 0;

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCounts((prev) => ({ ...prev, [key]: Math.ceil(current) })); // Update the specific key
    }, 50);
  };

  React.useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true); // Ensure animation only happens once
      countNumbers("satisfaction", 99, 2000);
      countNumbers("solutions", 100, 2000);
      countNumbers("team", 25, 2000);
      countNumbers("growth", 240, 2000);
    }
  }, [inView, hasAnimated]);

  return (
    <>
      <section
        ref={ref} // Attach ref to detect visibility
        className="px-16 py-8 lg:px-14 py:20 xl:px-28 xl:py-20 bg-orange-25"
        id="results"
      >
        <div className="flex flex-col gap-[48px]">
          <h3
            className="text-center font-header text-[#39312F] text-2xl
           lg:text-4xl xl:text-5xl"
          >
            Our results in numbers
          </h3>
          <div className="flex justify-center sm:flex-wrap sm:gap-[32px] lg:items-center lg:content-center lg:gap-y-[114px]">
            {/* Metric 1 */}
            <div className="flex flex-col gap-[32px] items-center text-5xl xl:text-[64px] font-header sm:w-[259px]">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={loveIcon} />
              </div>
              <div className="text-center sm:flex sm:flex-col sm:gap-[8px]">
                <div>
                  <h2 className="inline text-[#39312F]">
                    {counts.satisfaction}
                  </h2>
                  <span className="text-orange-100">%</span>
                </div>
                <p className="font-body text-sm text-[#39312F]">
                  Customer Satisfaction
                </p>
              </div>
            </div>
            {/* Metric 2 */}
            <div className="flex flex-col gap-[32px] items-center text-5xl font-header xl:text-[64px] sm:w-[259px]">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={products} />
              </div>
              <div className="text-center sm:flex sm:flex-col sm:gap-[8px]">
                <div>
                  <h2 className="inline text-[#39312F]">{counts.solutions}</h2>
                  <span className="text-orange-100">+</span>
                </div>
                <p className="font-body text-sm text-[#39312F]">
                  Company Solutions
                </p>
              </div>
            </div>
            {/* Metric 3 */}
            <div className="flex flex-col gap-[32px] items-center font-header text-5xl xl:text-[64px] sm:w-[259px]">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={team} />
              </div>
              <div className="text-center sm:flex sm:flex-col sm:gap-[8px]">
                <div>
                  <h2 className="inline text-[#39312F]">{counts.team}</h2>
                  <span className="text-orange-100">+</span>
                </div>
                <p className="font-body text-sm text-[#39312F]">Team Members</p>
              </div>
            </div>
            {/* Metric 4 */}
            <div className="flex flex-col gap-[32px] items-center font-header text-5xl xl:text-[64px] sm:w-[259px]">
              <div className="bg-orange-600 w-[48px] xl:w-16 p-2 rounded-xl flex justify-center">
                <img src={arrowGrowth} />
              </div>
              <div className="text-center sm:flex sm:flex-col sm:gap-[8px]">
                <div>
                  <h2 className="inline text-[#39312F]">{counts.growth}</h2>
                  <span className=" text-orange-100 ">%</span>
                </div>
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
