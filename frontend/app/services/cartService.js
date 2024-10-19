// frontend/services/cartService.js
const API_URL = "http://localhost:8000/cart";

// Add item to cart
export const addToCart = async (plantId, count) => {
  console.log("response", plantId, count);
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plantId, count }),
  });
  console.log("response", response.body);
  const data = await response.json();
  return data.cart;
};

// Get cart
export const getCart = async () => {
  const response = await fetch(API_URL + "/", {
    method: "GET",
    credentials: "include",
  });
  const data = await response.json();
  console.log("data from cart", data);
  return data.cart.items;
};

// Delete entire cart
export const deleteCart = async () => {
  const response = await fetch(API_URL, {
    method: "DELETE",
    credentials: "include",
  });
  const data = await response.json();
  return data.cart;
};

// Delete specific item from cart
export const deleteCartItem = async (plantId) => {
  const response = await fetch(`${API_URL}/${plantId}`, {
    method: "DELETE",
    credentials: "include",
  });
  const data = await response.json();
  return data.cart;
};

// Increment item count in cart
export const incrementCartItem = async (plantId) => {
  const response = await fetch(`${API_URL}/increment/${plantId}`, {
    method: "PUT",
    credentials: "include",
  });
  const data = await response.json();
  return data.cart.count;
};

// Decrement item count in cart
export const decrementCartItem = async (plantId) => {
  const response = await fetch(`${API_URL}/decrement/${plantId}`, {
    method: "PUT",
    credentials: "include",
  });
  const data = await response.json();
  return data.cart.count;
};
