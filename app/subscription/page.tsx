import React from "react";
import { JetBrains_Mono } from "@next/font/google";
import Navbar from "@/app/components/Navbar";
import Plants from "../constants";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});

const AboutUs = () => {
  return (
    <div
      className={`w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center ${jetBrainsMono.className} pb-10`}
    >
      <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
        <Navbar />
        <div className="w-full max-w-[960px] flex flex-col justify-between items-center py-10 ">
          <h1 className="w-full text-6xl text-left">Subscription Plans</h1>
          <p className="w-full text-lg font-thin text-left p-4 ">
            Choose from specially curated plans for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
