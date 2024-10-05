// backend/routes/cartRoutes.js
const express = require("express");
const {
  Addtocart,
  Getcart,
  Deletecart,
  DeletecartId,
  Incrementcart,
  Decrementcart,
} = require("../cart/cart"); // Update this path based on your structure
const  authMiddleware  = require("../authMiddleware"); // Authentication middleware

const router = express.Router();

// Add to cart
router.post("/add", authMiddleware, Addtocart);

// Get cart
router.get("/", authMiddleware, Getcart);

// Delete entire cart
router.delete("/", authMiddleware, Deletecart);

// Delete specific item from cart
router.delete("/:plantId", authMiddleware, DeletecartId);

// Increment item count in cart
router.put("/increment/:plantId", authMiddleware, Incrementcart);

// Decrement item count in cart
router.put("/decrement/:plantId", authMiddleware, Decrementcart);

module.exports = router;
