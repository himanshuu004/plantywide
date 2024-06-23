import React from "react";
import Image from "next/image";
import { Phone } from "@/public";

const GetinTouch = () => {
  return (
    <div className="w-full max-w-[960px] flex  justify-between items-center py-20 ">
      <div className="w-3/5 h-full flex flex-col justify-start items-start gap-6 pr-8">
        <div className=" w-full text-7xl font-medium">Get in Touch</div>
        <div className="w-full text-lg font-thin">
          Our friendly support team is available Monday through Friday, 9:00 AM
          to 5:00 PM EST. Reach us at{" "}
          <span className=" text-[#dcff50] text-xl font-normal">
            {" "}
            +91 98972 83397{" "}
          </span>{" "}
          with any questions.
        </div>
        <div className="w-full text-lg font-thin">
          For urgent matters outside of business hours, please leave a detailed
          message with your contact information. We'll respond as soon as
          possible.
        </div>
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <Image
          src={Phone}
          alt="Hero"
          width={1000}
          height={1000}
          priority
          className="h-[400px] w-full overflow-x-hidden object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default GetinTouch;
