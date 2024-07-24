"use client";
import React, { useEffect } from "react";
import PCard from "./PCard";

const PlantsDetails = () => {
  let selectedPlants: string[] = [];
  useEffect(() => {
    selectedPlants = JSON.parse(
      window.localStorage.getItem("selectedPlants") || "[]"
    );
  }, []);
  console.log(selectedPlants.length);
  return (
    <div className=" w-full flex flex-col justify-start items-start gap-2  py-6 text-[#929292] ">
      <h4 className="text-xl text-[#dcff50]">Plants selected</h4>
      {selectedPlants.map((id) => (
        <PCard key={id} id={id} />
      ))}
    </div>
  );
};

export default PlantsDetails;
