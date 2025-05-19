// src/app/components/Navbar.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { verifyToken } from "../services/loginService";
import Reminder from "../Reminder/ReminderSystem";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showReminder, setShowReminder] = useState(false); // 🔸 NEW

  useEffect(() => {
    const checkAuth = async () => {
      const res = await verifyToken();
      if (res) {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, []);

  return (
    <>
      <div className="w-full max-w-[960px] flex justify-between items-center py-10">
        <div className="text-4xl font-bold text-[#dcff50]">Planty</div>
        <ul className="hidden md:flex justify-end items-end gap-8">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/gift">
            <li>Explore</li>
          </Link>
          <Link href="/AboutUs">
            <li>About Us</li>
          </Link>
          <button onClick={() => setShowReminder((prev) => !prev)}>
            <li className="cursor-pointer">Reminder</li>
          </button>
          <Link href={isLoggedIn ? "/cart" : "/login"}>
            <li>{isLoggedIn ? "Cart" : "Login"}</li>
          </Link>
        </ul>
      </div>

      {/* 🔸 Conditionally render the ReminderSystem below the Navbar */}
      {showReminder && (
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-[960px]">
            <Reminder />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
