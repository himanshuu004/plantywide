const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
      unique: true, // Ensure that each Google ID is unique
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
    },
    avatar: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically set the date when the user is created
    },
  },
  { timestamps: true } // This will automatically add `createdAt` and `updatedAt` fields
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
