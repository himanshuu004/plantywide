// src/app/plants/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Plants from "@/app/constants";
import Navbar from "@/app/components/Navbar";
import { JetBrains_Mono } from "next/font/google";
import { FaStar } from "react-icons/fa";

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

interface Params {
  id: string;
}

const fetchPlant = (id: string): Plant | undefined => {
  const allPlants = Object.values(Plants).flat();
  return allPlants.find((plant) => plant.id === id);
};

export async function generateStaticParams() {
  const allPlants = Object.values(Plants).flat();
  return allPlants.map((plant) => ({ id: plant.id }));
}

interface PlantDetailProps {
  params: Params;
}

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});

export default function PlantDetail({ params }: PlantDetailProps) {
  const { id } = params;
  const plant = fetchPlant(id);

  if (!plant) {
    return notFound();
  }

  return (
    <>
      <div
        className={`w-full h-full min-h-[100vh] bg-[#212121] text-[#fdfdfd] flex flex-col justify-start items-center ${jetBrainsMono.className} pb-10`}
      >
        <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center">
          <Navbar />
        </div>
        <div className="w-full max-w-[960px] flex  justify-between items-start py-2  ">
          <div className=" w-full flex justify-start items-start">
            <Image
              src={plant.plantImage}
              alt={plant.plantName}
              width={400}
              height={500}
              className=" h-[600px] object-cover rounded-lg"
            />
          </div>
          <div className=" w-auto h-[600px] flex flex-col justify-center items-center gap-2">
            <h1 className=" w-full text-5xl">{plant.plantName}</h1>
            <div className="w-full flex justify-start items-start gap-1">
              <FaStar size={20} className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar size={20} className="text-yellow-400" />
              <p className="text-lg font-thin ">4.5</p>
            </div>
            <p className=" w-full text-2xl font-bold flex gap-4 justify-start items-center ">
              <span className=" line-through text-sm opacity-45">₹699</span>{" "}
              {plant.price + "0"}{" "}
              <span className=" bg-tertiary px-4 py-1 rounded-md text-primary text-lg">
                {" "}
                SALE
              </span>
            </p>
            <p className=" w-full  flex flex-col justify-start items-start ">
              <strong className="text-sm opacity-45">Occasion</strong>{" "}
              <span className="text-xl">{plant.occasion}</span>
            </p>
            <p className=" w-full  flex flex-col justify-start items-start ">
              <strong className="text-sm opacity-45 font-thin">
                Description
              </strong>{" "}
              <span className="text-lg font-thin">{plant.description}</span>
            </p>
            <p className=" w-full  flex flex-col justify-start items-start ">
              <strong className="text-sm opacity-45 font-thin">
                Suitable Weather
              </strong>{" "}
              <span className="text-lg font-thin">
                {plant.suitableWeatherType}
              </span>
            </p>
            <p className=" w-full  flex flex-col justify-start items-start ">
              <strong className="text-sm opacity-45 font-thin">
                Care Instructions
              </strong>{" "}
              <span className="text-lg font-thin">
                {plant.careInstructions}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
