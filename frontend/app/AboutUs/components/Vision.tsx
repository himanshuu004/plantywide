import React from "react";
import MCards from "./MCard";
import { Mission1, Mission2, Mission3 } from "@/public";

const Vision = () => {
  return (
    <div className="w-full max-w-[960px] flex  flex-col justify-start items-start  gap-8">
      <div className=" my-14 py-10 px-4 bg-[#212121] rounded-lg">
        <div className="w-full flex justify-start items-center text-5xl font-medium px-4">
          Our Mission: Promoting Tree Planting
        </div>
        <div className="w-full flex  justify-start items-start gap-2 pt-4 px-2 ">
          <MCards
            bgcolor="444444"
            title="Greener Communities"
            description="We are dedicated to increasing tree cover in urban and rural areas to improve air quality and combat climate change."
            url={Mission1}
          />
          <MCards
            bgcolor="444444"
            title="Habitat Restoration"
            description="By planting native trees, we aim to revive ecosystems and provide essential habitats for local wildlife."
            url={Mission2}
          />
          <MCards
            bgcolor="444444"
            title="Environmental Education"
            description="We teach people of all ages the importance of tree planting and how they can make a difference."
            url={Mission3}
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
