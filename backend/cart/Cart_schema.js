const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CartItem", CartItemSchema);
