"use client";
import React, { useEffect, useState } from "react";
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
interface PlantsDetailsProps {
  plantId: string;
  count: number;
}

interface selectedPlantsProps {
  selectedPlants: PlantsDetailsProps[];

}

const Summary : React.FC<selectedPlantsProps> = ({selectedPlants}) => {
  const [plants, setPlants] = useState<any>([]);
  let total = 0;
 useEffect(() => {
  const allPlants = Object.values(Plants).flat(); // Combine all plant arrays into a single array

  const selectedPlantsDetails = selectedPlants.map((item) => {
    const id = item.plantId;
    const plant = allPlants.find((plant) => plant.id === id); // Search for the plant in the combined array
    return {
      ...plant,
      count: item.count,
    };

  });

  setPlants(selectedPlantsDetails);
}, [selectedPlants]);


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
      {plants.map((plant:any ) => (
        <div
          className=" w-full flex justify-between items-center "
          key={plant.id}
        >
          <h5> {plant.plantName} </h5>
          <p> {`₹${plant.price * plant.count}`} </p>
          <p className=" hidden">{(total += plant.price)}</p>
        </div>
      ))}
      <hr className="w-full" />
      <div className=" w-full flex justify-between items-center">
        <h4> Total </h4>
        <h4> ₹{total} </h4>
      </div>
      <div className=" w-full flex justify-between items-center">
        <h4> Subscription Discount(10%) </h4>
        <h4>  ₹{total / 10} </h4>
      </div>
      <hr className="w-full" />
      <div className=" w-full flex justify-between items-center">
        <h4> Plants Total </h4>
        <h4> ₹{total - total / 10} </h4>
      </div>

      <div className=" w-full flex justify-between items-center">
        <h4> Delivery </h4>
        <h4> ₹{selectedPlants.length * 10} </h4>
      </div>
      {/* <div className=" w-full flex justify-between items-center">
        <h4> Tax </h4>
        <h4> {total - total / 10 + selectedPlants.length * 4} </h4>
      </div> */}
      <hr className="w-full" />
      <div className=" w-full flex justify-between items-center text-[#fdfdfd]">
        <h4> Sub Total </h4>
        <h4> ₹{total - total / 10 + selectedPlants.length * 10} </h4>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full rounded-md bg-[#dcff50] text-center text-[#212121] font-semibold px-4 py-2" onClick={()=>alert("confirm you want to pay")}>
          Pay Now
        </div>
      </div>
    </div>
  );
};

export default Summary;
