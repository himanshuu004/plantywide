import React from "react";
import { JetBrains_Mono } from "@next/font/google";
import HeroC from "./components/HeroC";
import GetinTouch from "./components/GetinTouch";

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

      <div className="w-full h-full bg-[#000000] text-[#fdfdfd] flex flex-col justify-center items-center">
        <GetinTouch />
      </div>
    </div>
  );
};

export default Contactus;
