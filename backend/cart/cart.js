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
  const userId = req.username || "abc";
  let { plantId, count } = req.body;
  console.log("cart requested", userId, count);

  const prevCart = await Cart.findOne({ userId });
  if (prevCart) {
    console.log("cart already exists");
    const item = prevCart.items.find(
      (item) => item.plantId.toString() === plantId.toString()
    );
    if (item) {
      console.log("item already exists", item);
      if (item.count != 0) {
        item.count += count;
      } else item.count = count;
      await prevCart.save();
      return res.status(200).json({ success: true });
    } else {
      const updatedCart = await Cart.findOneAndUpdate(
        { userId },
        {
          $addToSet: {
            items: {
              plantId,
              count,
            },
          },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      return res.status(200).json({ success: true });
    }
  } else {
    console.log("cart does not exist");
  }
  Cart.findOneAndUpdate(
    { userId },
    {
      $addToSet: {
        items: {
          plantId,
          count,
        },
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  )
    .then((cart) => res.status(200).json({ success: true }))
    .catch((error) => {
      console.error("Error adding to cart:", error);
      res.status(500).json({ success: false, message: "Server error" });
    });
};

// Get cart
const Getcart = async (req, res) => {
  const userId = req.username;
  console.log("cart requested", userId);
  try {
    const cart = await Cart.findOne({ userId });
    console.log(cart);
    res.json({ success: true, cart: cart || { items: [] } });
  } catch (error) {
    console.error("Error retrieving cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Delete entire cart
const Deletecart = async (req, res) => {
  const userId = req.username;
  try {
    await Cart.deleteOne({ userId });
    res.status(200).json({ success: true, message: "Cart has been deleted" });
  } catch (error) {
    console.error("Error deleting cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Delete specific item from cart
const DeletecartId = async (req, res) => {
  const userId = req.username || "abc"; // OAuth user ID
  const { plantId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });

    cart.items = cart.items.filter(
      (item) => item.plantId.toString() !== plantId.toString()
    );
    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error("Error deleting item from cart:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Increment item count in cart
const Incrementcart = async (req, res) => {
  const userId = req.username; // OAuth user ID
  const { plantId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });

    const item = cart.items.find(
      (item) => item.plantId.toString() === plantId.toString()
    );
    if (!item)
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });

    item.count += 1;
    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error("Error incrementing item count:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Decrement item count in cart
const Decrementcart = async (req, res) => {
  const userId = req.username || "abc";
  const { plantId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart)
      return res
        .status(404)
        .json({ success: false, message: "Cart not found" });

    const item = cart.items.find(
      (item) => item.plantId.toString() === plantId.toString()
    );
    if (!item)
      return res
        .status(404)
        .json({ success: false, message: "Item not found" });

    if (item.count > 1) {
      item.count -= 1;
    } else {
      cart.items = cart.items.filter(
        (i) => i.plantId.toString() !== plantId.toString()
      );
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.error("Error decrementing item count:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  Addtocart,
  Getcart,
  Deletecart,
  DeletecartId,
  Incrementcart,
  Decrementcart,
  Cart,
};
