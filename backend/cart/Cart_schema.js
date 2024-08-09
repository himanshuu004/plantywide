// backend/cart/Cart_Schema.js
const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  plantId: {
    type: String,
    required: true, // ID of the plant
  },
  count: {
    type: Number,
    required: true, // Quantity of the plant
  },
});

const CartSchema = new mongoose.Schema({
  userId: {
    type: String, // OAuth user ID
    required: true,
    unique: true,
  },
  items: [CartItemSchema], // Array of items in the cart
});

module.exports = mongoose.model("Cart", CartSchema);
