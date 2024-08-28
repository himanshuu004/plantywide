// backend/cart/Cart_Schema.js
import { Schema, model } from "mongoose";

const CartItemSchema = new Schema({
  plantId: {
    type: String,
    required: true, // ID of the plant
  },
  count: {
    type: Number,
    required: true, // Quantity of the plant
  },
});

const CartSchema = new Schema({
  userId: {
    type: String, // OAuth user ID
    required: true,
    unique: true,
  },
  items: [CartItemSchema], // Array of items in the cart
});

export default model("Cart", CartSchema);
