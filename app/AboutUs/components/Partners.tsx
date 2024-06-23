import React from "react";
import PCards from "./PCard";

const Partners = () => {
  return (
    <div className="w-full max-w-[960px] flex  flex-col justify-start items-start  gap-8">
      <div className=" my-14 py-10 px-4 bg-[#212121] rounded-lg">
        <div className="w-full flex justify-start items-center text-5xl font-medium px-4">
          Our Valued Partners
        </div>
        <div className="w-full flex  justify-start items-start gap-2 pt-4 px-2 ">
          <PCards
            bgcolor="444444"
            title="Forestry Experts"
            description="We collaborate with leading forestry organizations to ensure best practices in tree planting and care."
            url={"tree"}
          />
          <PCards
            bgcolor="444444"
            title="Community Groups"
            description="We work closely with local community groups to identify planting sites and engage volunteers."
            url={"group"}
          />
          <PCards
            bgcolor="444444"
            title="Corporate Sponsors"
            description="Our partnerships with businesses provide vital funding and resources to support our tree planting programs."
            url={"office"}
          />
          <PCards
            bgcolor="444444"
            title="Educational Institutions"
            description="We partner with schools and universities to incorporate tree planting into educational curriculums."
            url={"school"}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
