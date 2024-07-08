"use client";
import React from "react";

const PCard = () => {
  const selectedPlants: string[] = JSON.parse(
    window.localStorage.getItem("selectedPlants") || "[]"
  );
  return <div></div>;
};

export default PCard;
