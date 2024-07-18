const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {
  Addtocart,
  Getcart,
  Deletecart,
  DeletecartId,
  Incrementcart,
  Decrementcart,
} = require("./cart/cart");
const app = express();

const {
  addPlant,
  getPlants,
  deleteAllPlants,
  deletePlantById,
  updatePlantById,
} = require("./plants/Plants");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

// Cart Functionalities Start

app.post("/addtocart", Addtocart);
app.get("/getcart", Getcart);
app.delete("/deletecart", Deletecart);
app.delete("/deletecart/:id", DeletecartId);
app.put("/incrementcart/:id", Incrementcart);
app.put("/decrementcart/:id", Decrementcart);

// Cart Functionalities End

// Plant routes
app.post("/plant", addPlant);
app.get("/plants", getPlants);
app.delete("/plants", deleteAllPlants);
app.delete("/plant/:id", deletePlantById);
app.put("/plant/:id", updatePlantById);

// Plant routes end

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
