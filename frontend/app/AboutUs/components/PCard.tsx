import React from "react";

import { GiPineTree } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";

interface PCardsProps {
  title: string;
  description: string;
  bgcolor: string;
  url: string;
}
const PCards: React.FC<PCardsProps> = ({
  title,
  description,
  bgcolor,
  url,
}) => {
  return (
    <div
      className={`w-1/3  bg-[#${bgcolor}] py-4 px-2 rounded-md flex flex-col justify-start items-start gap-2 `}
    >
      {url === "tree" ? (
        <GiPineTree size={50} />
      ) : url === "group" ? (
        <FaPeopleGroup size={50} />
      ) : url == "office" ? (
        <FaBriefcase size={50} />
      ) : (
        <FaSchool size={50} />
      )}
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-md font-thin">{description}</p>
    </div>
  );
};

export default PCards;
