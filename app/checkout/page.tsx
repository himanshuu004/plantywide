import React from "react";
import Navbar from "@/app/components/Navbar";
import { JetBrains_Mono } from "next/font/google";

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
        <div className="w-[70%] flex flex-col justify-start items-statr gap-6  py-4">
          <h4 className="text-6xl">CheckOut</h4>
          <div className=" w-full flex flex-col justify-start items-start gap-2 px-4 py-4 border-[1px] rounded-lg">
            <h4 className="text-3xl text-[#dcff50]">Personal Details</h4>
            <div className="w-full flex justify-start items-start gap-4 ">
              <div className="w-1/3 flex flex-col justify-start items-start">
                <p className=" opacity-35">Name</p>
                <input
                  type="text"
                  placeholder="Pallav"
                  className="w-full h-10 px-4 rounded-md"
                />
              </div>
              <div className="w-1/3 flex flex-col justify-start items-start">
                <p className=" opacity-35">Email</p>
                <input
                  type="text"
                  placeholder="abc@g.com"
                  className="w-full h-10 px-4 rounded-md"
                />
              </div>
              <div className="w-1/3 flex flex-col justify-start items-start">
                <p className=" opacity-35">Phone</p>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full h-10 px-4 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
