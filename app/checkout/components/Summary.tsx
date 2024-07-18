"use client";
import React, { useEffect } from "react";
import Plants from "@/app/constants";

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

const Summary = () => {
  const fetchPlant = (id: string): Plant | undefined => {
    const allPlants = Object.values(Plants).flat();
    return allPlants.find((plant) => plant.id === id);
  };
  let selectedPlants: string[] = [];
  useEffect(() => {
    selectedPlants = JSON.parse(
      window.localStorage.getItem("selectedPlants") || "[]"
    );
  }, []);
  let total = 0;
  let plants = selectedPlants.map((id) => fetchPlant(id) as Plant);

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4 text-sm text-[#aaa9a9]">
      <h3 className=" w-full text-center text-2xl text-[#dcff50] ">
        {" "}
        Summary{" "}
      </h3>
      <div className=" w-full flex justify-between items-center font-bold text-[#dcff50]">
        <h4> Plants selected </h4>
        <h4> Price </h4>
      </div>
      {plants.map((plant) => (
        <div
          className=" w-full flex justify-between items-center "
          key={plant.id}
        >
          <h5> {plant.plantName} </h5>
          <p> {950} </p>
          <p className=" hidden">{(total += 950)}</p>
        </div>
      ))}
      <hr className="w-full" />
      <div className=" w-full flex justify-between items-center">
        <h4> Total </h4>
        <h4> {total} </h4>
      </div>
      <div className=" w-full flex justify-between items-center">
        <h4> Subscription Discount </h4>
        <h4> - {total / 10} </h4>
      </div>
      <hr className="w-full" />
      <div className=" w-full flex justify-between items-center">
        <h4> Subcription Total </h4>
        <h4> {total - total / 10} </h4>
      </div>

      <div className=" w-full flex justify-between items-center">
        <h4> Delivery </h4>
        <h4> {selectedPlants.length * 40} </h4>
      </div>
      <div className=" w-full flex justify-between items-center">
        <h4> Tax </h4>
        <h4> {0} </h4>
      </div>
      <hr className="w-full" />
      <div className=" w-full flex justify-between items-center text-[#fdfdfd]">
        <h4> Sub Total </h4>
        <h4> {total - total / 10 + selectedPlants.length * 40} </h4>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full rounded-md bg-[#dcff50] text-center text-[#212121] font-semibold px-4 py-2">
          Pay Now
        </div>
      </div>
    </div>
  );
};

export default Summary;
