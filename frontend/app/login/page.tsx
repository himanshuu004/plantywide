import React from "react";

const Login = () => {
  const handleLogin = () => {
    window.location.href =
      "https://planty-wide-backend-tanishks-projects.vercel.app/auth/google";
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
