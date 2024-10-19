"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { JetBrains_Mono } from "next/font/google";
import PlantsDetails from "./components/PlantsDetails";
import Summary from "./components/Summary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCart } from "../services/cartService";
import Loader from "../components/Loader";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

interface PlantsDetailsProps {
  plantId: string;
  count: number;
}

const CheckOut = () => {
  const [selectedPlants, setSelectedPlants] = useState<PlantsDetailsProps[]>(
    []
  );
  const [loading, setLoading] = useState(true); // State to track loading status
  const fetchCartData = async () => {
    try {
      console.log("Fetching cart data...");
      const cartData = await getCart();

      console.log("Cart data:", cartData);
      setSelectedPlants(cartData);
    } catch (error) {
      console.error("Failed to fetch cart data:", error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  };
  useEffect(() => {
    fetchCartData();
  }, []);
  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-[#212121] text-[#fdfdfd] flex flex-col justify-start items-center ${jetBrainsMono.className} pb-10`}
    >
      <Navbar />
      {
        loading ? (
          <div className="w-full flex justify-center items-center">
          <Loader />
        </div>
        ) :(
          <div className="w-full max-w-[960px] flex flex-col justify-start items-start gap-8 text-[#fdfdfd]">
            <div className="w-full flex flex-col justify-start items-statr gap-6  py-4">
              <h4 className="text-6xl">CheckOut</h4>
              <div className=" w-full flex justify-start items-start gap-4">
                <div className=" w-[70%] flex flex-col justify-start items-start gap-2 px-2  rounded-lg">
                  <h4 className="text-xl text-[#dcff50]">Personal Details</h4>
                  <div className="w-full flex justify-start items-start gap-4 text-md opacity-90  ">
                    <div className="w-1/3 flex flex-col justify-start items-start gap-2">
                      <p className=" opacity-35">Name</p>
                      <input
                        type="text"
                        placeholder="Pallav"
                        className="w-full h-10 px-4 text-[#212121] rounded-md "
                      />
                    </div>
                    
                    <div className="w-1/3 flex flex-col justify-start items-start gap-2">
                      <p className=" opacity-35">Phone</p>
                      <input
                        type="text"
                        placeholder="Phone"
                        className="w-full h-10 px-4 text-[#212121] rounded-md"
                      />
                    </div>
                  </div>
                  <PlantsDetails selectedPlants={selectedPlants} fetchCartData={() =>fetchCartData()} />
                </div>
                <div className=" w-[30%] flex flex-col justify-start items-start gap-2 px-2 py-4 border-[1px] rounded-lg">
                  <Summary selectedPlants={selectedPlants} />
                </div>
              </div>
            </div>
          </div>

        )
      }
      <ToastContainer />
    </div>
  );
};

export default CheckOut;
