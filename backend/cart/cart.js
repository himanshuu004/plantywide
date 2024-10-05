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

// Middleware for authentication
const authenticate = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  next();
};

// Add to cart
const Addtocart = async (req, res) => {
  authenticate(req, res, () => {
    const userId = req.user.id; // OAuth user ID
    const { plantId, count } = req.body;

    Cart.findOneAndUpdate(
      { userId },
      {
        $addToSet: {
          items: {
            plantId,
            $inc: { count },
          },
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((cart) => res.status(200).json({ success: true, cart }))
      .catch((error) => {
        console.error("Error adding to cart:", error);
        res.status(500).json({ success: false, message: "Server error" });
      });
  });
};

// Get cart
const Getcart = async (req, res) => {
  authenticate(req, res, async () => {
    const userId = req.user.id; // OAuth user ID

    try {
      const cart = await Cart.findOne({ userId });
      res.status(200).json({ success: true, cart: cart || { items: [] } });
    } catch (error) {
      console.error("Error retrieving cart:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  });
};

// Delete entire cart
const Deletecart = async (req, res) => {
  authenticate(req, res, async () => {
    const userId = req.user.id; // OAuth user ID

    try {
      await Cart.deleteOne({ userId });
      res.status(200).json({ success: true, message: "Cart has been deleted" });
    } catch (error) {
      console.error("Error deleting cart:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  });
};

// Delete specific item from cart
const DeletecartId = async (req, res) => {
  authenticate(req, res, async () => {
    const userId = req.user.id; // OAuth user ID
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
  });
};

// Increment item count in cart
const Incrementcart = async (req, res) => {
  authenticate(req, res, async () => {
    const userId = req.user.id; // OAuth user ID
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
  });
};

// Decrement item count in cart
const Decrementcart = async (req, res) => {
  authenticate(req, res, async () => {
    const userId = req.user.id; // OAuth user ID
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
  });
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
