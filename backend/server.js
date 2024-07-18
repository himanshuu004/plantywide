const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const CartItem = require("./Cart_schema"); // Ensure you have defined this schema properly
const app = express();

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

app.post("/addtocart", async (req, res) => {
  try {
    const cart = new CartItem({
      id: req.body.id,
      count: req.body.count,
    });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/getcart", async (req, res) => {
  try {
    const cart = await CartItem.find();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/deletecart", async (req, res) => {
  try {
    await CartItem.deleteMany();
    res.status(200).send("Cart has been deleted");
  } catch (error) {
    res.status(500).send(error);
    }
});
app.delete("/deletecart/:id", async (req, res) => {
    try {
        await CartItem.findOneAndDelete({id: req.params.id});
        res.status(200).send("Cart has been deleted");
    } catch (error) {
        res.status(500).send(error);
    }

});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
