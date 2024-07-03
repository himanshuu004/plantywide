import React from "react";

interface SCardProps {
  Oprice: number | null;
  ActPrice: number | string;
  title: string;
  subTitle: string;
  description: string[];
}

const SCard: React.FC<SCardProps> = ({
  Oprice,
  ActPrice,
  title,
  subTitle,
  description,
}) => {
  return (
    <div>
      <div className="w-auto h-96 flex flex-col justify-between items-center px-4 py-4 gap-4 border-2 border-[#fdfdfd] rounded-3xl">
        <div className="relative w-full flex justify-center items-center">
          {Oprice !== null && (
            <h4 className="absolute top-0 right-0 text-md opacity-45 line-through">
              Rs.{Oprice}
            </h4>
          )}
          <h1 className="pt-3 w-full text-4xl text-left">Rs.{ActPrice}</h1>
        </div>
        <h2 className="w-full text-left text-xl text-[#dcff50]">{title}</h2>
        <p className=" w-full text-left">{subTitle}</p>
        <ul className="w-full list-disc list-inside text-sm">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
        <div className="w-auto rounded-md bg-[#dcff50] text-[#212121] font-semibold px-4 py-2">
          Subscribe Now
        </div>
      </div>
    </div>
  );
};

export default SCard;
