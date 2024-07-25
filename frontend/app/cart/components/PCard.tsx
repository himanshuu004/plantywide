import React from "react";
import Plants from "@/app/constants";
import Image from "next/image";
import { incrementCart, decrementCart } from "./cart-api";

interface Plant {
  id: string;
  plantName: string;
  plantImage: string;
  occasion: string;
  description: string;
  suitableWeatherType: string;
  careInstructions: string;
  price: string;
}

interface PCardProps {
  id: string;
  count: number;
}

const PCard: React.FC<PCardProps> = ({ id, count }) => {
  const fetchPlant = (id: string): Plant | undefined => {
    const allPlants = Object.values(Plants).flat();
    return allPlants.find((plant) => plant.id === id);
  };
  const plant = fetchPlant(id) as Plant;
  return (
    <div className="w-full flex justify-start items-start gap-4 px-4 py-6 border-[1px] border-[#949494] rounded-lg">
      <div className="  flex justify-center items-center ">
        <Image
          src={plant.plantImage}
          alt={plant.plantName}
          width={100}
          height={100}
          className="w-32 h-32 object-cover rounded-lg"
        />
      </div>
      <div className=" w-full grid grid-cols-2 grid-flow-row gap-y-4 gap-x-2">
        <h4 className=" text-xl font-medium text-[#fdfdfd]">
          {plant.plantName}
        </h4>
        <p className=" text-lg text-[#dcff50] text-right">{plant.occasion}</p>
        <p className=" col-span-2 text-sm">{plant.description}</p>
        <div className=" w-full flex justify-start  items-center gap-4">
          <div
            onClick={() => {
              count <= 1
                ? alert("Can't decrease , please remove the item")
                : decrementCart(id);
            }}
            className=" w-auto h-auto p-4 flex justify-center items-center"
          >
            {" "}
            -
          </div>
          <p className="text-xs">{count}</p>
          <div
            onClick={() => incrementCart(id)}
            className=" w-auto h-auto p-4 flex justify-center items-center"
          >
            {" "}
            +
          </div>
        </div>
        <div className=" w-full flex justify-start  items-center gap-4">
          <p className="text-xs">Delivery date </p>
          <input
            type="date"
            className=" w-32 rounded-md text-gray-500 p-2 text-xs opacity-80"
          />
        </div>

        <p className=" col-span-[25%] w-auto text-end text-sm  hover:text-[#dcff50] duration-300 cursor-pointer">
          view details {">>"}{" "}
        </p>
      </div>
    </div>
  );
};

export default PCard;
