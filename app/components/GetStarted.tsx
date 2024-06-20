"use client";

import React, { useState, useEffect } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import "./PlantPicks.css"; // Make sure this path is correct

const GetStarted: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [inProp1, setInProp1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [inProp2, setInProp2] = useState(false);

  useEffect(() => {
    if (toggle) {
      setInProp(true);
    } else {
      const timeout = setTimeout(() => setInProp(false), 300); // duration of the fade-out
      return () => clearTimeout(timeout);
    }
  }, [toggle]);

  useEffect(() => {
    if (toggle1) {
      setInProp1(true);
    } else {
      const timeout = setTimeout(() => setInProp1(false), 300); // duration of the fade-out
      return () => clearTimeout(timeout);
    }
  }, [toggle1]);

  useEffect(() => {
    if (toggle2) {
      setInProp2(true);
    } else {
      const timeout = setTimeout(() => setInProp2(false), 300); // duration of the fade-out
      return () => clearTimeout(timeout);
    }
  }, [toggle2]);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggle1 = () => {
    setToggle1(!toggle1);
  };

  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };

  return (
    <div className="w-full max-w-[960px] h-auto flex flex-col bg-[#212121] justify-start items-start py-20 px-10 gap-8 my-10 rounded-md">
      <div className="w-full flex justify-start items-center text-5xl font-medium">
        Get Started Today
      </div>
      <div className=" w-full flex gap-4 justify-start items-start">
        <div className="w-auto rounded-md bg-transparent text-[#dcff50] border-2 border-[#dcff50] font-semibold p-4">
          Explore Subscriptions
        </div>
        <div className="w-auto rounded-md bg-[#dcff50] text-[#212121] font-semibold p-4">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
