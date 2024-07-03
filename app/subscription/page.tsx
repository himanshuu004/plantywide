import React from "react";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Plants from "../constants";
import SCard from "./components/subscard";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});

const AboutUs = () => {
  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center ${jetBrainsMono.className} pb-10`}
    >
      <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
        <Navbar />
        <div className="w-full max-w-[960px] flex flex-col justify-between items-center gap-10 py-10 ">
          <div className="w-full">
            <h1 className="w-full text-6xl text-left">Subscription Plans</h1>
            <p className="w-full text-lg font-thin text-left p-4 ">
              Choose from specially curated plans for you
            </p>
          </div>
          <div className="w-full flex justify-start items-start gap-2 ">
            <SCard
              Oprice={1000}
              ActPrice={846}
              title="Single Plant"
              subTitle="Receive one plant every year"
              description={[
                "Includes packaging and transportation",
                "Personalized care instructions",
              ]}
            />
            <SCard
              Oprice={4000}
              ActPrice={3430}
              title="Four Plants"
              subTitle="Receive four plants per year"
              description={[
                "Includes packaging and transportation",
                "Personalized care instructions",
              ]}
            />
            <SCard
              Oprice={null}
              ActPrice={"299/plant"}
              title="Multiple Plants"
              subTitle="Choose any number of plants"
              description={[
                "Cost varies based on plant selection",
                "Includes packaging and transportation",
                "Personalized care instructions",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
