const mongoose = require("mongoose");

const Addtocart = async (req, res) => {
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
};

const Getcart = async (req, res) => {
  try {
    const cart = await CartItem.find();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

const Deletecart = async (req, res) => {
  try {
    await CartItem.deleteMany();
    res.status(200).send("Cart has been deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

const DeletecartId = async (req, res) => {
  try {
    await CartItem.findOneAndDelete({ id: req.params.id });
    res.status(200).send("Cart Item has been deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

const Incrementcart = async (req, res) => {
  try {
    const cart = await CartItem.findOne({ id: req.params.id });
    cart.count += 1;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

const Decrementcart = async (req, res) => {
  try {
    const cart = await CartItem.findOne({ id: req.params.id });
    if(cart.count === 1){
      pass;
    }
    else{
      cart.count -= 1;
      await cart.save();
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};
