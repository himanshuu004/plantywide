import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface PlantCardProps {
  name: string;
  imag: string | StaticImageData;
  id: string;
  onSelect: () => void;
  isSelected: boolean;
}

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  imag,
  id,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      className={`bg-[#fdfdfd] text-[#212121] w-64 h-180 flex flex-col justify-center items-center rounded-lg rounded-b-lg `}
    >
      <div>
        <Image
          src={typeof imag === "string" ? imag : imag.src}
          alt={name}
          width={300}
          height={300}
          className="w-64 h-64 object-cover justify-center items-center object-top rounded-t-md"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start px-4 py-2  bg-transparent">
        <h4 className="font-light text-xl">{name}</h4>
        <div className="w-full flex justify-start items-start gap-1">
          <p className="text-sm ">4.8</p>
        </div>
        <div className="w-full">
          <Link href={`/plants/${id}`}>
            <p className=" w-full text-right text-sm text-opacity-90">
              view details
            </p>
          </Link>
        </div>
      </div>
      <div
        onClick={()=>{onSelect()}}
        className={`w-[100%]   text-[#212121] font-semibold mt-4 px-4 py-2 cursor-pointer rounded-b-lg text-center ${
          isSelected ? "bg-[#ed7777] " : "bg-[#dcff50]"
        }`}
      >
        {isSelected ? "Selected" : "Select"}
      </div>
    </div>
  );
};

export default PlantCard;
