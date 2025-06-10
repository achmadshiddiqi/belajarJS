const jwt = require("jsonwebtoken");
require("dotenv").config();
// Jwt secret
// const jwtSecret =
//   "2d385fb66ec6cf0807e147237e17948c1f56490a87396b2f9a6b3161c6475ec3";
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;

// User authentication
exports.loginAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).send("This sessioh has expired. Please login.");
      }

      if (!decodedToken.role || !decodedToken.username) {
        return res.status(401).send("Not Authorized");
      } else {
        req.user = decodedToken;
        next();
      }
    });
  }
};

// User authorization
exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    if (decodedToken.role !== "admin") {
      return res.status(401).send("You are not authorized");
    } else {
      next();
    }
  } else {
    res.status(401);
    return res.send("Token not available");
  }
};
