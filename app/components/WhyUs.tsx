import React from "react";
import GCards from "./GCards";

const WhyUs: React.FC = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col justify-start items-start py-20 gap-8 text-[#212121]">
      <div className="w-full flex justify-start items-center text-5xl font-medium px-4">
        Why Choose Us?
      </div>
      <div className="w-full flex justify-start items-start gap-2">
        <GCards
          bgcolor="a9f00f"
          title="Passion for Plants"
          description=" Our team is dedicated to providing you with the highest quality plants and exceptional customer service."
        />
        <GCards
          bgcolor="a9f00f"
          title="Curated Selections"
          description="We carefully curate our plant collections to offer unique and beautiful choices for every occasion."
        />
        <GCards
          bgcolor="a9f00f"
          title="Sustainable Practices"
          description=" We prioritize eco-friendly sourcing and packaging, ensuring a positive impact on the environment."
        />
        <GCards
          bgcolor="a9f00f"
          title="Customer Satisfaction"
          description=" Your happiness is our top priority. We're committed to providing a seamless and enjoyable experience."
        />
      </div>
    </div>
  );
};

export default WhyUs;
