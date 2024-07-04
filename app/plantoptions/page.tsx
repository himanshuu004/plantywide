"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import PlantCard from "./components/PlantCard";
import Plants from "@/app/constants";
import { usePathname, useSearchParams } from "next/navigation";

const AboutUs = () => {
  const router = useRouter();
  const pathname = usePathname();
  const limit = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${limit}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, limit]);

  // const limit :String | Number = searchParams;
  const [selectedPlants, setSelectedPlants] = useState<string[]>([]);
  const selectionLimit =
    limit === "multiple" ? Infinity : parseInt(limit as string, 10);

  const toggleSelection = (id: string) => {
    setSelectedPlants((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((plantId) => plantId !== id);
      } else if (prevSelected.length < selectionLimit) {
        return [...prevSelected, id];
      }
      return prevSelected;
    });
  };

  useEffect(() => {
    setSelectedPlants([]); // Reset selection when the component mounts or limit changes
  }, [limit]);

  return (
    <div className="w-full h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center pb-10">
      <Navbar />
      <p className="text-lg font-thin">
        Choose from the wide variety of plants, specially selected for special
        occasions
      </p>
      <div className="plant-list">
        {Object.keys(Plants).map((occasion) => (
          <div
            className="w-full max-w-[960px] flex flex-col justify-start items-start py-10 gap-8 text-[#dcff50]"
            key={occasion}
          >
            <h2 className="text-4xl">{occasion}</h2>
            <div className="w-full flex justify-center items-center gap-6">
              {Plants[occasion as keyof typeof Plants].map((plant) => (
                <div key={plant.id} className="plant-card">
                  <PlantCard
                    key={plant.id}
                    id={plant.id}
                    imag={plant.plantImage}
                    name={plant.plantName}
                    isSelected={selectedPlants.includes(plant.id)}
                    onSelect={() => toggleSelection(plant.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
