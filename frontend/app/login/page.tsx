"use client";
import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  const handleLogin = () => {
    window.location.href =
      "https://planty-wide-backend-tanishks-projects.vercel.app/auth/google";
  };

  return (
    <div
      className={`w-full h-full min-h-[100vh] bg-[#212121] text-[#fdfdfd] flex flex-col justify-start items-center `}
    >
      <Navbar />
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
