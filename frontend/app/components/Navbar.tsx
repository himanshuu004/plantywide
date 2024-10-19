"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { verify } from "crypto";
import { verifyToken } from "../services/loginService";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
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
    <div className="w-full max-w-[960px] flex  justify-between items-center py-10 ">
      <div className=" w-auto text-4xl font-bold text-[#dcff50]">Planty</div>
      <div>
        <ul className=" w-auto hidden md:flex justify-end items-end gap-8 ">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/gift">
            <li>Explore</li>
          </Link>
          {/* <Link href="/subscription">
            <li>Subscription</li>
          </Link> */}
          
          <Link href="/AboutUs">
            <li>About Us</li>
          </Link>
          <Link href={isLoggedIn? "/cart"  : "/login" }>
            <li>{
              isLoggedIn ? "Cart" : "Login"
              }</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
