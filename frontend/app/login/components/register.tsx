import React, { useState } from "react";
import { registerUser } from "../../services/loginService";

interface RegisterFormProps {
  onToggleForm: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleForm }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await registerUser(username, password);
      alert("Registration successful! You can now log in.");
      setErrorMessage(""); // Clear any previous error
      onToggleForm(); // Switch to login after successful registration
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className=" w-full h-screen flex flex-col justify-start items-center gap-10">
      <h2 className=" text-7xl text-[#dcff50]">Sign Up</h2>

      <form
        onSubmit={handleRegister}
        className=" max-w-[960px] flex flex-col justify-start items-start gap-4 text-xl p-20 border-2 border-[#fdffdf] rounded-3xl"
      >
        <div className="w-full min-w-64 flex flex-col justify-start items-start gap-2">
          <label htmlFor="username" className="text-[#dcff50]">
            Email
          </label>
          <input
            type="text"
            placeholder="email"
            className="w-full p-2 border-2 border-[#fdfdfd] bg-[#212121] rounded-lg"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full min-w-64 flex flex-col justify-start items-start gap-2">
          <label htmlFor="username" className="text-[#dcff50]">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-2 border-[#fdfdfd] bg-[#212121] rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full min-w-80 flex flex-col justify-end items-end gap-2">
          <button type="submit" className="hover:text-[#dcff50]">Sign Up</button>
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={onToggleForm} className="text-[#dcff50] cursor-pointer">>
          Log in
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
