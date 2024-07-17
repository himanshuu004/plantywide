const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const CartItem = require("./Cart_schema");
const app = express();

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.post("/addtocart", (req, res) => {
  try { 
    const cart = new CartItem({
      id: req.body.name, 
      count: req.body.age,
    });
    cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.send(error);
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
