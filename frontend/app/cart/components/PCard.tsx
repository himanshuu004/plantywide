import React, { useState, useEffect } from "react";
import Plants from "@/app/constants";
import Image from "next/image";
import {
  incrementCartItem,
  decrementCartItem,
  deleteCartItem,
} from "../../services/cartService";
import { MdDeleteOutline } from "react-icons/md";
import LoaderData from "./LoaderData";
import { useRouter } from "next/navigation";

interface Plant {
  id: string;
  plantName: string;
  plantImage: string;
  occasion: string;
  description: string;
  suitableWeatherType: string;
  careInstructions: string;
  price: number;
}

interface PCardProps {
  id: string;
  count: number;
  onUpdate: () => void;
}

const PCard: React.FC<PCardProps> = ({ id, count, onUpdate }) => {
  const [plant, setPlant] = useState<Plant | undefined>(undefined);
  const [loading, setLoading] = useState(false); // State to track
  const router = useRouter();
  useEffect(() => {
    const fetchPlant = (id: string): Plant | undefined => {
      const allPlants = Object.values(Plants).flat();
      return allPlants.find((plant) => plant.id === id);
    };
    setPlant(fetchPlant(id));
  }, [id]);

  const handleIncrement = async () => {
    try {
      setLoading(true);
      await incrementCartItem(id);
      onUpdate(); // Trigger the parent component to re-fetch the cart data
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDecrement = async () => {
    try {
      if (count <= 1) {
        alert("Can't decrease, please remove the item");
      } else {
        setLoading(true);
        await decrementCartItem(id);
        onUpdate(); // Trigger the parent component to re-fetch the cart data
      }
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    await deleteCartItem(id);
    onUpdate();
  };

  if (!plant) return null;

  return (
    <div className="w-full flex justify-start items-start gap-4 px-4 py-6 border-[1px] border-[#949494] rounded-lg">
      <div className="flex justify-center items-center">
        <Image
          src={plant.plantImage}
          alt={plant.plantName}
          width={100}
          height={100}
          className="w-32 h-32 object-cover rounded-lg"
        />
      </div>
      <div className="w-full grid grid-cols-2 gap-y-4 gap-x-2">
        <h4 className="text-xl font-medium text-[#fdfdfd]">
          {plant.plantName}
        </h4>
        <p className="text-lg text-[#dcff50] text-right">{plant.occasion}</p>
        <p className="col-span-2 text-sm">{plant.description}</p>
        <div className="w-full flex justify-start items-center gap-4">
          <div
            onClick={handleDecrement}
            className="w-6 h-6  flex justify-center items-center cursor-pointer text-[#dcff50] border-[1px] border-[#dcff50] rounded-md"
          >
            -
          </div>
          <p className="text-xs">{loading ? <LoaderData size={6} /> : count}</p>
          <div
            onClick={handleIncrement}
            className="w-6 h-6   flex justify-center items-center cursor-pointer border-[1px] text-[#dcff50] border-[#dcff50] rounded-md"
          >
            +
          </div>
        </div>
        <div
          onClick={handleDelete}
          className=" w-full flex justify-end items-center opacity-60 cursor-pointer "
        >
          <MdDeleteOutline size={24} color="#D2042D" />
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <p className="text-xs">Delivery date </p>
          <input
            type="date"
            className="w-32 rounded-md text-gray-500 p-2 text-xs opacity-80"
          />
        </div>
        <p className="col-span-[25%] w-auto text-end text-sm hover:text-[#dcff50] duration-300 cursor-pointer" onClick={()=> router.push(`/plants/${plant.id}`)}>
          view details {">>"}{" "}
        </p>
      </div>
    </div>
  );
};

export default PCard;
