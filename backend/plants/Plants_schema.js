const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  plantName: {
    type: String,
    required: true,
  },
  plantImage: {
    type: String,
    required: true,
  },
  occasion: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  suitableWeatherType: {
    type: String,
    required: true,
  },
  careInstructions: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Plant", PlantSchema);
