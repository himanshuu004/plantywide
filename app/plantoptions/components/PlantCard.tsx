import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { StaticImageData } from "next/image";

interface PlantCardProps {
  name: string;
  imag: string | StaticImageData;
  id: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ name, imag, id }) => {
  return (
    <div className="bg-[#fdfdfd] text-[#212121] w-64 h-180 flex flex-col justify-center items-center rounded-md overflow-clip ">
      <div>
        <Image
          src={imag}
          alt="Picture of the author"
          width={300}
          height={300}
          className=" w-64 h-64 object-cover justify-center items-center object-top rounded-t-md"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start px-4 py-2 ">
        <h4 className=" font-light text-xl">{name}</h4>
        <div className="w-full flex justify-start items-start gap-1">
          <FaStar size={20} className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar size={20} className="text-yellow-400" />
          <p className="text-sm ">4.8</p>
        </div>
        <div className=" w-full flex justify-between items-center">
          <h3 className=" w-full text-end font-thin text-sm text-gray-400">
            {" "}
            view product
          </h3>
        </div>
      </div>
      <div className="w-full ">
        <Link href={`/plants/${id}`}>
          <div className="w-full rounded-sm flex items-center justify-center bg-[#dcff50] text-[#212121] font-semibold px-4 py-2">
            Select
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
