const jwt = require("jsonwebtoken");
const Token = require("../models/tokens");
require("dotenv").config();

// User authentication
exports.loginAuth = (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res.status(401).send("Token not provided, please login");
    }

    jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decodedToken) => {
        if (err) {
          return res.status(401).send("Your session has expired, please login");
        }

        if (!decodedToken.role || !decodedToken.username) {
          return res.status(401).send("Not Authorized");
        } else {
          req.user = decodedToken;
          next();
        }
      }
    );
  } catch (err) {
    return res.status(403).send(err);
  }
};

// User authorization
exports.adminAuth = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).send("Token not provided, please login");
  }

  if (req.user.role !== "admin") {
    return res.status(401).send("You are not authorized");
  } else {
    next();
  }
};
