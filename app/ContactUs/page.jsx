import React from "react";
import { JetBrains_Mono } from "@next/font/google";
import HeroC from "./components/HeroC";
import GetinTouch from "./components/GetinTouch";
import Occasions from "./components/occasions";
import FAQ from "./components/FAQ";

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
      <Occasions />
      <div className="w-full h-full bg-[#000000] text-[#fdfdfd] flex flex-col justify-center items-center">
        <FAQ />
      </div>
    </div>
  );
};

export default Contactus;
