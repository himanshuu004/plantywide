import React from "react";
import Image from "next/image";
import { HeroImg } from "@/public";

const Hero = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col-reverse md:flex-row justify-between items-center  py-2 ">
      <div className="w-full md:w-3/5 h-full flex flex-col justify-start items-start gap-6 px-8 md:pr-8">
        <div className=" w-full text-3xl md:text-7xl font-medium">
          Grow Happiness: Plant Subscriptions for Every Occasion
        </div>
        <div className="w-full text-md md:text-lg font-thin">
          Surprise loved ones with the gift of nature and joy! Our plant
          subscriptions deliver curated green companions for every occasion.
        </div>
        <div className="w-auto rounded-md bg-[#dcff50] text-[#212121] font-semibold px-4 py-2">
          Explore Subscriptions
        </div>
      </div>
      <div className=" w-5/6 md:w-2/5 flex justify-center items-center">
        <Image
          src={HeroImg}
          alt="Hero"
          width={1000}
          height={1000}
          priority
          className="h-[200px] md:h-[700px] w-full overflow-x-hidden object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
