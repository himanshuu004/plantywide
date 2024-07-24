import React from "react";

interface GCardsProps {
  title: string;
  description: string;
  bgcolor: string;
}

const GCards: React.FC<GCardsProps> = ({ title, description, bgcolor }) => {
  return (
    <div
      className={`w-1/3  bg-[#${bgcolor}] py-4 px-4 rounded-md flex flex-col justify-start items-start gap-2 `}
    >
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-lg font-thin">{description}</p>
    </div>
  );
};

export default GCards;
