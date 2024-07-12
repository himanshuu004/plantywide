import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface PlantCardProps {
  name: string;
  imag: string | StaticImageData;
  id: string;
  price: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ name, imag, id, price }) => {
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
      <div className="w-full flex flex-col justify-center items-start px-4 py-2  bg-transparent gap-1">
        <div className="w-full flex  justify-between items-start gap-1">
          <div className="w-[70%] flex flex-col justify-start items-start gap-1">
            <h4 className="font-light text-lg">{name}</h4>
            <p className="text-sm ">4.8</p>
          </div>
          <div className="w-[30%] flex flex-col justify-end items-end ">
            <h4 className="font-light text-sm line-through text-[#949494]">
              {price + "0"}
            </h4>
            <h4 className="font-light text-2xl ">{price + "0"}</h4>
          </div>
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
        className={`w-[100%]   text-[#212121] font-semibold mt-4 px-4 py-2 cursor-pointer rounded-b-lg text-center ${"bg-[#dcff50]"}`}
      >
        Add to Cart
      </div>
    </div>
  );
};

export default PlantCard;
