import React, { useState } from "react";
import { loginUser } from "../../services/loginService";

interface LoginFormProps {
  onToggleForm: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggleForm }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser(username, password);
      localStorage.setItem("token", data.token); // Save token in localStorage
      window.location.href= "/" // Redirect to home page
      setErrorMessage(""); // Clear any previous error
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className=" w-full h-screen flex flex-col justify-start items-center gap-10">
      <h2 className=" text-7xl text-[#dcff50]">Login</h2>
      <form
        onSubmit={handleLogin}
        className=" max-w-[960px] flex flex-col justify-start items-start gap-4 text-xl p-20 border-2 border-[#fdffdf] rounded-3xl"
      >
        <div className="w-full min-w-64 flex flex-col justify-start items-start gap-2">
          <label htmlFor="username" className="text-[#dcff50]">
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            value={username}
            className="w-full p-2 border-2 border-[#fdfdfd] bg-[#212121] rounded-lg"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full min-w-80 flex flex-col justify-start items-start gap-2">
          <label htmlFor="username" className="text-[#dcff50]">
            Password
          </label>
          <input
            className="w-full p-2 border-2 border-[#fdfdfd] bg-[#212121] rounded-lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full min-w-80 flex flex-col justify-end items-end gap-2">
          <button type="submit" className="hover:text-[#dcff50]">
            Login
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </form>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={onToggleForm} className="text-[#dcff50] cursor-pointer">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
