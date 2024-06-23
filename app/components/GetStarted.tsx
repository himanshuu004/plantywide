"use client";

import React from "react";
import Link from "next/link";

const GetStarted: React.FC = () => {
  return (
    <div className="w-full max-w-[960px] h-auto flex flex-col bg-[#212121] justify-start items-start py-20 px-10 gap-8 my-10 rounded-md">
      <div className="w-full flex justify-start items-center text-5xl font-medium">
        Get Started Today
      </div>
      <div className=" w-full flex gap-4 justify-start items-start">
        <div className="w-auto rounded-md bg-transparent text-[#dcff50] border-2 border-[#dcff50] font-semibold p-4">
          Explore Subscriptions
        </div>
        <Link href="/contact-us">
          <div className="w-auto rounded-md bg-[#dcff50] text-[#212121] font-semibold p-4">
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
