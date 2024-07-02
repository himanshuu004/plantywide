import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full max-w-[960px] flex  justify-between items-center py-10 ">
      <div className=" w-auto text-4xl font-bold text-[#dcff50]">Planty</div>
      <div>
        <ul className=" w-auto flex justify-end items-end gap-8 ">
          <li>Home</li>
          <Link href="/plantoptions">
            <li>Explore</li>
          </Link>
          <li>Subscription</li>
          <Link href="/AboutUs">
            <li>About Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
