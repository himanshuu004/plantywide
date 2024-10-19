const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  console.log("Access Token:", accessToken); // Log the extracted token

  if (!accessToken) {
    console.log("No access token provided.");
    return res.json(
      {success : false, message : "Access token not found"}
    ); // Unauthorized
  }

  try {
    const user = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.username = user.username; // Assign just the username (or other relevant data)
    next();
  } catch (err) {
    console.error("JWT Verification Error:", err.message); // Log the error
    return res.json(
      {success : false, message : "Verification failed"}
    );  // Forbidden
  }
};

module.exports =  authMiddleware ;
