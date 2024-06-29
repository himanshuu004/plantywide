import React from "react";
import { JetBrains_Mono } from "@next/font/google";
import Navbar from "@/app/components/Navbar";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});

const AboutUs = () => {
  return (
    <div
      className={`w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center ${jetBrainsMono.className}`}
    >
      <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
        <Navbar />
      </div>
    </div>
  );
};

export default AboutUs;
