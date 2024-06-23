import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroC: React.FC = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col justify-start items-start py-20 gap-6 ">
      <h1 className="w-full text-7xl font-medium">Contact Us</h1>
      <p className="w-full text-lg font-thin px-1">
        We're here to help you succeed. Get in touch with us today for
        personalized support and expert advice.
      </p>
      <div className="w-auto flex justify-between  rounded-md bg-[#dcff50] text-[#212121] gap-4 font-semibold px-4 py-2">
        <p>Get Started</p>
        <FaArrowDown size={20} />
      </div>
    </div>
  );
};

export default HeroC;
