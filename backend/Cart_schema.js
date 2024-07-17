const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  id: String,
  count: Number,
});

const CartItem = mongoose.model("cartItem", Schema);

module.exports = CartItem;
