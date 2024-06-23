"use client";

import React, { useState, useEffect } from "react";
import { TbTriangleFilled } from "react-icons/tb";
import "./FAQ.css"; // Make sure this path is correct

const FAQ: React.FC = () => {
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
        Frequently Asked Questions
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
          <h4>How do I place an order?</h4>
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
              You can place an order online through our website. Select the
              products you need, add them to your cart, and proceed to checkout.
              You will be guided through the process step-by-step.
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
          <h4>What is your return policy?</h4>
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
              We offer a 30-day return policy on most products. If you are not
              satisfied with your purchase, you can return it for a full refund.
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
          <h4>What are your shipping options?</h4>
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
              <ul className="list-disc list-inside">
                <li>Standard Shipping</li>
                <li>Expedited Shipping</li>
                <li>Next-Day Shipping</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
