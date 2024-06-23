import React from "react";

import { FaPenNib } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { FaHandshakeAngle } from "react-icons/fa6";

interface VCardsProps {
  title: string;
  description: string;
  bgcolor: string;
  url: string;
}
const VCards: React.FC<VCardsProps> = ({
  title,
  description,
  bgcolor,
  url,
}) => {
  return (
    <div
      className={`w-1/3  bg-[#${bgcolor}] py-4 px-4 rounded-md flex flex-col justify-start items-start gap-3 `}
    >
      {url === "pen" ? (
        <FaPenNib size={50} />
      ) : url === "handshake" ? (
        <FaHandshakeAngle size={50} />
      ) : (
        <LuMessagesSquare size={50} />
      )}
      <h4 className="text-2xl font-bold">{title}</h4>
      <p className="text-lg font-thin">{description}</p>
    </div>
  );
};

export default VCards;
