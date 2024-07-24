import React from "react";
import Navbar from "@/app/components/Navbar";
import { JetBrains_Mono } from "next/font/google";
import PlantsDetails from "./components/PlantsDetails";
import Summary from "./components/Summary";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const CheckOut = () => {
  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-[#212121] text-[#fdfdfd] flex flex-col justify-start items-center ${jetBrainsMono.className} pb-10`}
    >
      <Navbar />
      <div className="w-full max-w-[960px] flex flex-col justify-start items-start gap-8 text-[#fdfdfd]">
        <div className="w-full flex flex-col justify-start items-statr gap-6  py-4">
          <h4 className="text-6xl">CheckOut</h4>
          <div className=" w-full flex justify-start items-start gap-4">
            <div className=" w-[70%] flex flex-col justify-start items-start gap-2 px-2  rounded-lg">
              <h4 className="text-xl text-[#dcff50]">Personal Details</h4>
              <div className="w-full flex justify-start items-start gap-4 text-md opacity-90  ">
                <div className="w-1/3 flex flex-col justify-start items-start gap-2">
                  <p className=" opacity-35">Name</p>
                  <input
                    type="text"
                    placeholder="Pallav"
                    className="w-full h-10 px-4 text-[#212121] rounded-md "
                  />
                </div>
                <div className="w-1/3 flex flex-col justify-start items-start gap-2">
                  <p className=" opacity-35">Email</p>
                  <input
                    type="text"
                    placeholder="abc@g.com"
                    className="w-full h-10 px-4 text-[#212121] rounded-md"
                  />
                </div>
                <div className="w-1/3 flex flex-col justify-start items-start gap-2">
                  <p className=" opacity-35">Phone</p>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full h-10 px-4 text-[#212121] rounded-md"
                  />
                </div>
              </div>
              <PlantsDetails />
            </div>
            <div className=" w-[30%] flex flex-col justify-start items-start gap-2 px-2 py-4 border-[1px] rounded-lg">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
