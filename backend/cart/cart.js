// backend/cart/cart.js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Define the CartItem schema
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

// Define the Cart schema
const CartSchema = new Schema({
  userId: {
    type: String, // OAuth user ID
    required: true,
    unique: true,
  },
  items: [CartItemSchema], // Array of items in the cart
});

// Create the Cart model
const Cart = model("Cart", CartSchema);

// Add to cart
const Addtocart = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = req.user.id; // OAuth user ID
  const { plantId, count } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Create a new cart if one does not exist for the user
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.plantId.toString() === plantId.toString()
    );

    if (existingItem) {
      existingItem.count += count;
    } else {
      cart.items.push({ plantId, count });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get cart
const Getcart = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = req.user.id; // OAuth user ID

  try {
    const cart = await Cart.findOne({ userId });
    res.status(200).json(cart || { items: [] });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete entire cart
const Deletecart = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = req.user.id; // OAuth user ID

  try {
    await Cart.deleteOne({ userId });
    res.status(200).send("Cart has been deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

// Delete specific item from cart
const DeletecartId = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = req.user.id; // OAuth user ID
  const { plantId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.plantId.toString() !== plantId.toString()
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Increment item count in cart
const Incrementcart = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = req.user.id; // OAuth user ID
  const { plantId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(
      (item) => item.plantId.toString() === plantId.toString()
    );
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.count += 1;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Decrement item count in cart
const Decrementcart = async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = req.user.id; // OAuth user ID
  const { plantId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const item = cart.items.find(
      (item) => item.plantId.toString() === plantId.toString()
    );
    if (!item) return res.status(404).json({ message: "Item not found" });

    if (item.count > 1) {
      item.count -= 1;
    } else {
      cart.items = cart.items.filter(
        (i) => i.plantId.toString() !== plantId.toString()
      );
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  Addtocart,
  Getcart,
  Deletecart,
  DeletecartId,
  Incrementcart,
  Decrementcart,
};
