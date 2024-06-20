import React from "react";
import Image from "next/image";
import { HeroImg } from "@/public";

const Hero = () => {
  return (
    <div className="w-full max-w-[960px] flex  justify-between items-center py-20 ">
      <div className="w-3/5 h-full flex flex-col justify-start items-start gap-6 pr-8">
        <div className=" w-full text-7xl font-medium">
          Grow Happiness: Plant Subscriptions for Every Occasion
        </div>
        <div className="w-full text-lg font-thin">
          Surprise loved ones with the gift of nature and joy! Our plant
          subscriptions deliver curated green companions for every occasion.
        </div>
        <div className="w-auto rounded-md bg-[#dcff50] text-[#212121] font-semibold px-4 py-2">
          Explore Subscriptions
        </div>
      </div>
      <div className="w-2/5 flex justify-center items-center">
        <Image
          src={HeroImg}
          alt="Hero"
          width={1000}
          height={1000}
          priority
          className="h-[700px] w-full overflow-x-hidden object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Hero;
