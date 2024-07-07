'use client'
import React from "react";

const CheckOut = () => {
    const selectedPlants: string[] = JSON.parse(window.localStorage.getItem("selectedPlants") || "[]");
    console.log(selectedPlants);
    return <div>CheckOut</div>;
};

export default CheckOut