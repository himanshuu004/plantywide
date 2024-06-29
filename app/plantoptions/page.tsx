import React from "react";
import { JetBrains_Mono } from "@next/font/google";
import Navbar from "@/app/components/Navbar";
import PlantCard from "./components/PlantCard";
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
        <p className="text-lg font-thin ">
          Choose from the wide variety of plants, specially selected for special
          occasions
        </p>
        <div className="plant-list">
          {Object.keys(Plants).map((occasion) => (
            <div
              className="w-full  max-w-[960px] flex flex-col justify-start items-start py-10 gap-8 text-[#dcff50]"
              key={occasion}
            >
              <h2 className="text-4xl">{occasion}</h2>
              <div className=" w-full flex justify-center items-center gap-6">
                {Plants[occasion as keyof typeof Plants].map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <PlantCard
                      key={plant.id}
                      imag={plant.plantImage}
                      name={plant.plantName}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
