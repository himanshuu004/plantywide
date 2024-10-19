"use client";
import React, { useEffect, useState } from "react";
import PCard from "./PCard";
import { getCart } from "@/app/services/cartService";
import Loader from "@/app/components/Loader";

interface PlantsDetailsProps {
  plantId: string;
  count: number;
}

interface selectedPlantsProps {
  selectedPlants: PlantsDetailsProps[];
  fetchCartData: () => void;
}

const PlantsDetails: React.FC<selectedPlantsProps> = ({
  selectedPlants,
  fetchCartData,
}) => {
  
  

  return (
    <div className="w-full flex flex-col justify-start items-start gap-2 py-6 text-[#929292]">
      <h4 className="text-xl text-[#dcff50]">Plants selected</h4>
      { (
        selectedPlants.map((item) => (
          <PCard
            key={item.plantId}
            id={item.plantId}
            count={item.count}
            onUpdate={() => fetchCartData()}
          />
        ))
      )}
    </div>
  );
};

export default PlantsDetails;
