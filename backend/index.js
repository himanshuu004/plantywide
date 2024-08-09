const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

dotenv.config();

const app = express();

// CORS setup
const allowedOrigins = [
  "http://localhost:3000",
  "https://planty-beige.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using https
  })
);

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google/callback`,
    },
    (accessToken, refreshToken, profile, done) => {
      // Save user profile or create user in database
      return done(null, profile);
    }
  )
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

// OAuth Routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:3000"); // Redirect to your frontend after successful login
  }
);

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("http://localhost:3000");
  });
});

// Cart Functionalities Start
const {
  Addtocart,
  Getcart,
  Deletecart,
  DeletecartId,
  Incrementcart,
  Decrementcart,
} = require("./cart/cart");

app.post("/addtocart", Addtocart);
app.get("/getcart", Getcart);
app.delete("/deletecart", Deletecart);
app.delete("/deletecart/:id", DeletecartId);
app.put("/incrementcart/:id", Incrementcart);
app.put("/decrementcart/:id", Decrementcart);

// Cart Functionalities End

// Plant routes
const {
  addPlant,
  getPlants,
  deleteAllPlants,
  deletePlantById,
  updatePlantById,
} = require("./plants/Plants");

app.post("/plant", addPlant);
app.get("/plants", getPlants);
app.delete("/plants", deleteAllPlants);
app.delete("/plant/:id", deletePlantById);
app.put("/plant/:id", updatePlantById);

// Plant routes end

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
