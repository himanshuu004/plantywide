import React from "react";
import { JetBrains_Mono } from "@next/font/google";
import HeroC from "./components/hero";
import Mission from "./components/Mission";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});

const Contactus = () => {
  return (
    <div
      className={`w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center ${jetBrainsMono.className}`}
    >
      <HeroC />
      <Mission />
    </div>
  );
};

export default Contactus;
