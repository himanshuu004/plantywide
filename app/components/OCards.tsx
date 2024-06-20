import React from "react";

interface OCardProprs {
  index: number;
  title: string;
  description: string;
}

const OCards: React.FC<OCardProprs> = ({ index, title, description }) => {
  return (
    <div className=" w-full flex gap-4 justify-start items-start p-4 ">
      <div className="w-1/12 flex justify-center items-center ">
        <div className="bg-[#717171] px-3 py-1 rounded-sm text-2xl">
          {index}
        </div>
      </div>
      <div className="w-auto flex flex-col justify-start items-start gap-4 ">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-md font-light">{description}</p>
      </div>
    </div>
  );
};

export default OCards;
