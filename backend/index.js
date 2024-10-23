const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authController = require("./controllers/authController");
const cartRoutes = require("./routes/cartRoutes");
const plantController = require("./plants/Plants");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://planty-beige.vercel.app", "*"],
    credentials: true,
  })
);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
};
connectDB();

app.use("/auth", authController);

app.use("/cart", cartRoutes);

// app.use("/plants", plantController);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
