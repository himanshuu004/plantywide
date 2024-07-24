import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroC: React.FC = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col justify-start items-start py-20 gap-6">
      <h1 className="w-full text-7xl font-medium">About Us</h1>
      <p className="w-full text-lg font-thin px-1">
        Join us in our mission to make the world a greener place, one tree at a
        time.
      </p>
      <div className=" w-full flex justify-start items-center gap-4">
        <div className="w-auto rounded-md bg-transparent text-[#dcff50] border-2 border-[#dcff50] font-semibold p-3">
          <p>Donate Now</p>
        </div>
        <div className="w-auto rounded-md bg-[#dcff50] text-[#212121] border-2 border-[#dcff50] font-semibold p-3">
          Get Involved
        </div>
      </div>
    </div>
  );
};

export default HeroC;
