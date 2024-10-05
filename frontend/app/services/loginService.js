import axios from "axios";

// Register function to send user details to backend
export const registerUser = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:8000/auth/register", {
      username,
      password,
    });
    console.log("Registration successful:", response.data);
    return response.data; // contains success message or user data
  } catch (error) {
    console.error("Registration failed:", error.response.data);
    throw error; // Rethrow error for handling in the component
  }
};

// Login function
export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/auth/login",
      {
        username,
        password,
      },
      { withCredentials: true }
    );
    console.log("Login successful:", response.data);
    return response.data; // contains token and user data
  } catch (error) {
    console.error("Login failed:", error.response.data);
    throw error; // Rethrow error for handling in the component
  }
};

// Logout function
export const logoutUser = () => {
  localStorage.removeItem("token"); // Remove token from localStorage
  alert("Logged out successfully!");
};
