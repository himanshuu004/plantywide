import React from "react";
import Image from "next/image";

interface MCardProps {
  title: string;
  description: string;
  bgcolor: string;
  url: string;
}

const MCard: React.FC<MCardProps> = ({ title, description, bgcolor, url }) => {
  return (
    <div
      className={`w-1/3  bg-[#${bgcolor}] py-4 px-4 rounded-md flex flex-col justify-start items-start gap-2 `}
    >
      <Image
        src={url}
        alt="Hero"
        width={1000}
        height={1000}
        priority
        className="h-[200px] w-full overflow-x-hidden object-cover rounded-md"
      />
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-lg font-thin">{description}</p>
    </div>
  );
};

export default MCard;
