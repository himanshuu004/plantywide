import React from "react";
import Image from "next/image";
import { HeroImg } from "@/public";

const Occasions = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col  justify-start items-start py-20 gap-8 ">
      <div className="w-full flex justify-start  items-center text-5xl font-medium ">
        Email Address
      </div>
      <div className="w-full flex  justify-between items-center gap-6 ">
        <div className="w-full grid grid-flow-row grid-cols-2  justify-start  items-center">
          <div className=" w-full flex gap-4 justify-start items-start p-4 ">
            <div className="w-[40px] flex justify-center items-center ">
              <div className="bg-[#717171] px-3 py-1 rounded-sm text-2xl">
                {1}
              </div>
            </div>
            <div className="w-auto flex flex-col justify-start items-start gap-4 ">
              <h4 className="text-xl font-semibold">General Inquiries</h4>
              <p className="text-md font-light">
                {" "}
                For general questions or feedback, please email at{" "}
                <span className="text-[#dcff50]">
                  contact.planty@gmail.com.
                </span>
              </p>
            </div>
          </div>
          <div className=" w-full flex gap-4 justify-start items-start p-4 ">
            <div className="w-[40px] flex justify-center items-center ">
              <div className="bg-[#717171] px-3 py-1 rounded-sm text-2xl">
                {2}
              </div>
            </div>
            <div className="w-auto flex flex-col justify-start items-start gap-4 ">
              <h4 className="text-xl font-semibold">Sales Inquiries</h4>
              <p className="text-md font-light">
                For sales-related questions, please contact{" "}
                <span className="text-[#dcff50]">sales.planty@gmail.com</span>
              </p>
            </div>
          </div>
          <div className=" w-full flex gap-4 col-span-2 justify-start items-start p-4 ">
            <div className="w-[40px] flex justify-start items-center ">
              <div className="bg-[#717171] px-3 py-1 rounded-sm text-2xl">
                {3}
              </div>
            </div>
            <div className="w-auto flex flex-col justify-start items-start gap-4 ">
              <h4 className="text-xl font-semibold">Support Requests</h4>
              <p className="text-md font-light">
                For technical support or troubleshooting, please email{" "}
                <span className="text-[#dcff50]">support.planty@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/5 flex justify-center items-center">
          <Image
            src={HeroImg}
            alt="Hero"
            width={1000}
            height={1000}
            priority
            className="h-[300px] w-full overflow-x-hidden object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Occasions;
