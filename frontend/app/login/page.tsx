"use client";

import React, { useState } from "react";
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import Navbar from "../components/Navbar";
import { JetBrains_Mono } from "@next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // You can specify the weight and other options
  subsets: ["latin"], // Specify the subsets you want to use
});

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div
      className={`w-full min-h-screen h-full bg-[#212121] text-[#fdfdfd] flex flex-col justify-start items-center ${jetBrainsMono.className}`}
    >
      <Navbar />
      {isLogin ? (
        <LoginForm onToggleForm={toggleForm} />
      ) : (
        <RegisterForm onToggleForm={toggleForm} />
      )}
    </div>
  );
};

export default AuthForm;
