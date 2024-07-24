"use client";

import React, { useState, useEffect } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import "./returntocommunity.css"; // Make sure this path is correct

const ReturnToCom: React.FC = () => {
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
        Giving Back to the Community
      </div>
      <div className="flex flex-col gap-4 justify-center items-start">
        <div
          onClick={handleToggle}
          className="w-full flex justify-start gap-4 items-start cursor-pointer"
        >
          <TbTriangleFilled
            size={20}
            className={`transform ${
              toggle ? "rotate-180" : "rotate-90"
            } duration-300`}
          />
          <h4>Tree Planting Events</h4>
        </div>
        {inProp && (
          <div
            className={`w-full px-2 flex justify-start items-start ${
              toggle
                ? "fade-enter fade-enter-active"
                : "fade-exit fade-exit-active"
            }`}
          >
            <div className="px-6 border-l-[1px] border-[#dfdfdf] font-thin">
              We regularly organize community tree planting events where
              volunteers of all ages can get their hands dirty and make a
              tangible impact on their local environment.
            </div>
          </div>
        )}
        <div
          onClick={handleToggle1}
          className="w-full flex justify-start gap-4 items-start cursor-pointer"
        >
          <TbTriangleFilled
            size={20}
            className={`transform ${
              toggle1 ? "rotate-180" : "rotate-90"
            } duration-300`}
          />
          <h4>Environmental Scholarships</h4>
        </div>
        {inProp1 && (
          <div
            className={`w-full px-2 flex justify-start items-start ${
              toggle1
                ? "fade-enter fade-enter-active"
                : "fade-exit fade-exit-active"
            }`}
          >
            <div className="px-6 border-l-[1px] border-[#dfdfdf] font-thin">
              Through our scholarship program, we provide financial support to
              students pursuing degrees in environmental science, forestry, or
              sustainability-related fields.
            </div>
          </div>
        )}
        <div
          onClick={handleToggle2}
          className="w-full flex justify-start gap-4 items-start cursor-pointer"
        >
          <TbTriangleFilled
            size={20}
            className={`transform ${
              toggle2 ? "rotate-180" : "rotate-90"
            } duration-300`}
          />
          <h4>Adopt-a-Tree Initiative</h4>
        </div>
        {inProp2 && (
          <div
            className={`w-full px-2 flex justify-start items-start ${
              toggle2
                ? "fade-enter fade-enter-active"
                : "fade-exit fade-exit-active"
            }`}
          >
            <div className="px-6 border-l-[1px] border-[#dfdfdf] font-thin">
              Our Adopt-a-Tree program encourages community members to take
              personal responsibility for the care and maintenance of newly
              planted trees in their neighborhoods.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnToCom;
