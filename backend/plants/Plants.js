const mongoose = require("mongoose");
const Plant = require("./Plants_schema");

const addPlant = async (req, res) => {
  try {
    const plant = new Plant({
      id: req.body.id,
      plantName: req.body.plantName,
      plantImage: req.body.plantImage,
      occasion: req.body.occasion,
      description: req.body.description,
      suitableWeatherType: req.body.suitableWeatherType,
      careInstructions: req.body.careInstructions,
      price: req.body.price,
    });
    await plant.save();
    res.status(201).json(plant);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAllPlants = async (req, res) => {
  try {
    await Plant.deleteMany();
    res.status(200).send("All plants have been deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePlantById = async (req, res) => {
  try {
    await Plant.findOneAndDelete({ id: req.params.id });
    res.status(200).send("Plant has been deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePlantById = async (req, res) => {
  try {
    const plant = await Plant.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!plant) {
      return res.status(404).send("Plant not found");
    }
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addPlant,
  getPlants,
  deleteAllPlants,
  deletePlantById,
  updatePlantById,
};
