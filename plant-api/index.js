// server.js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Example in-memory database (replace with a database in production)
let plants = {
  Birthdays: [],
  Anniversaries: [],
  Graduations: [],
  Holidays: [],
  "New Home": [],
};

// Routes
// Get all plants
app.get("/plants", (req, res) => {
  res.json(plants);
});
app.get("/plants/Holidays", (req, res) => {
  res.json(plants.Holidays);
});

// Add a new plant
app.post("/plants", (req, res) => {
  const newPlant = req.body;
  const { occasion } = newPlant;

  // Check if the occasion exists in plants object
  if (plants.hasOwnProperty(occasion)) {
    plants[occasion].push(newPlant);
    res.status(201).json(newPlant);
  } else {
    res
      .status(400)
      .json({ error: `Invalid occasion: ${occasion}. Plant not added.` });
  }
});

// Delete all plants (empty the array)
app.delete("/plants", (req, res) => {
  plants = {
    Birthdays: [],
    Anniversaries: [],
    Graduations: [],
    Holidays: [],
    "New Home": [],
  }; // Reset the plants object
  res.status(200).json({ message: "All plants deleted successfully." });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
