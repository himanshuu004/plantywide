import React from "react";
import GCards from "./GCards";

const GifthGrowth: React.FC = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col justify-start items-start py-20 gap-8">
      <div className="w-full flex justify-start items-center text-5xl font-medium px-4">
        The Gift of Growth
      </div>
      <div className="w-full flex justify-start items-start gap-4">
        <GCards
          bgcolor="444444"
          title="Personalized Care"
          description=" Every plant subscription includes care instructions, tips, and resources to ensure your plant thrives."
        />
        <GCards
          bgcolor="444444"
          title="Meaningful Gift"
          description="Give a present that goes beyond material possessions, offering a piece of nature and lasting joy."
        />
        <GCards
          bgcolor="444444"
          title="Sustainable Choice"
          description=" Support responsible plant sourcing and contribute to a greener future with our eco-conscious practices."
        />
      </div>
    </div>
  );
};

export default GifthGrowth;
