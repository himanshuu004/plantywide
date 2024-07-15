"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Plants from "../constants";
import Image from "next/image";

const Cart = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const getPlantDetails = (plantId: string) => {
    for (const occasion in Plants) {
      const plant = Plants[occasion as keyof typeof Plants].find(
        (p) => p.id === plantId
      );
      if (plant) return plant;
    }
    return null;
  };

  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-[#212121] text-[#fdfdfd] flex flex-col justify-center items-center pb-10`}
    >
      <Navbar />
      <h1 className="text-4xl mb-4">Your Cart</h1>
      <div className="w-full max-w-[960px] flex flex-col gap-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((plantId) => {
            const plant = getPlantDetails(plantId);
            return (
              plant && (
                <div
                  key={plant.id}
                  className={`bg-[#fdfdfd] text-[#212121] w-full flex flex-col justify-start items-center rounded-lg p-4 mb-4`}
                >
                  <div className="w-full flex justify-between items-center">
                    <Image
                      src={
                        typeof plant.plantImage === "string"
                          ? plant.plantImage
                          : plant.plantImage
                      }
                      alt={plant.plantName}
                      width={100}
                      height={100}
                      className="object-cover rounded-md"
                    />
                    <div className="flex flex-col justify-start items-start ml-4">
                      <h4 className="font-light text-lg">{plant.plantName}</h4>
                      <p className="text-sm ">4.8</p>
                      <div className="flex justify-between items-end w-full mt-2">
                        <h4 className="font-light text-sm line-through text-[#949494]">
                          {plant.price + "0"}
                        </h4>
                        <h4 className="font-light text-2xl ">
                          {plant.price + "0"}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
