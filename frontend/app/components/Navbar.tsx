import React from "react";
import Link from "next/link";

const Navbar = () => {
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
          <Link href="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
