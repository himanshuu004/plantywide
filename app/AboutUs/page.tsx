import React from "react";
import { JetBrains_Mono } from "next/font/google";
import HeroC from "./components/hero";

import Founders from "./components/Founders";
import Partners from "./components/Partners";
import ReturnToCom from "./components/ReturnToCom";
import Vision from "./components/Vision";
import Navbar from "../components/Navbar";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});

const AboutUs = () => {
  return (
    <div
      className={`w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center ${jetBrainsMono.className}`}
    >
      <Navbar />
      <div
        className="w-full h-full bg-cover bg-center text-[#fdfdfd] flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url("../public/AboutUS.jpeg")`,
        }}
      >
        <HeroC />
      </div>

      <Vision />
      <div className="w-full h-full bg-[#dcff50] text-[#212121] flex flex-col justify-center items-center">
        <Founders />
      </div>
      <div className="w-full h-full bg-[#000000] text-[#fdfdfd] flex flex-col justify-center items-center">
        <Partners />
      </div>
      <div className="w-full h-full bg-[#dfdfdf] text-[#fdfdfd] flex flex-col justify-center items-center">
        <ReturnToCom />
      </div>
    </div>
  );
};

export default AboutUs;
