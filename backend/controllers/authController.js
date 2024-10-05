const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

// User registration
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const doesUserExist = await User.exists({ username });
    if (doesUserExist) {
      console.log(`User registration failed: ${username} already exists.`);
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    console.log(`User registered successfully: ${username}`);
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      console.log(`Login failed: User not found - ${username}`);
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Verify password
    const doPasswordsMatch = await bcrypt.compare(password, user.password);
    if (!doPasswordsMatch) {
      console.log(`Login failed: Invalid password for user - ${username}`);
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Generate tokens
    const accessToken = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const refreshToken = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set tokens in cookies
    res
      .cookie("refreshToken", refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use secure in production
        sameSite: "lax",
      })
      .cookie("accessToken", accessToken, {
        maxAge: 60 * 60 * 1000, // 1 hour
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .json({ success: true, message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Refresh access token
router.get("/refresh", async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    // Check if refresh token exists
    if (!refreshToken) {
      console.log("Refresh token not found.");
      return res
        .status(401)
        .json({ success: false, message: "Refresh token not found" });
    }

    // Verify refresh token
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("Refresh token error:", err.message);
        return res
          .status(403)
          .json({ success: false, message: "Invalid refresh token" });
      }

      // Generate new access token
      const { username } = decoded;
      const newAccessToken = jwt.sign({ username }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Set new access token in cookie
      res
        .cookie("accessToken", newAccessToken, {
          maxAge: 60 * 60 * 1000, // 1 hour
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        })
        .json({ success: true, message: "Access token refreshed" });
    });
  } catch (err) {
    console.error("Token refresh error:", err.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
