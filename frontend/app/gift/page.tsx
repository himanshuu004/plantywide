"use client";

import React, { useState, useEffect, Suspense } from "react";
import { JetBrains_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Plants from "../constants";
import PlantCard from "./components/PlantCard";
import { addToCart } from "../services/cartService";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const PlantOptionsComponent = () => {
  const [addingToCart, setAddingToCart] = useState(false);

  const handleAddToCart = async (plantId: string) => {
    try {
      setAddingToCart(true);
      toast.success("Adding to cart...");
      await addToCart(plantId, 1);
      toast.success("Added to cart!");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      toast.error("Failed to add to cart. Please try again.");
    } finally {
      setAddingToCart(false);
    }
  };

  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center ${jetBrainsMono.className} pb-10`}
    >
      <Navbar />
      <p className="text-lg font-thin">
        Choose from the wide variety of plants, specially selected for special
        occasions
      </p>
      <div className="w-full max-w-[986px]  flex flex-row justify-end items-end ">
        <Link href="/cart">
          <div
            className={`w-[100%]  text-[#212121] font-semibold mt-4 px-4 py-2 cursor-pointer rounded-lg text-center bg-[#dcff50]`}
          >
            Go to Cart
          </div>
        </Link>
      </div>
      <div className="plant-list">
        {Object.keys(Plants).map((occasion) => (
          <div
            className="w-full max-w-[960px] flex flex-col justify-start items-start py-10 gap-8 text-[#dcff50]"
            key={occasion}
          >
            <h2 className="text-4xl">{occasion}</h2>
            <div className="w-full flex justify-center items-center gap-6">
              {Plants[occasion as keyof typeof Plants].map((plant) => (
                <div key={plant.id} className={`plant-card `}>
                  <PlantCard
                    key={plant.id}
                    id={plant.id}
                    imag={plant.plantImage}
                    name={plant.plantName}
                    price={plant.price}
                    handleAddToCart={() => handleAddToCart(plant.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

const PlantOptions = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlantOptionsComponent />
    </Suspense>
  );
};

export default PlantOptions;
