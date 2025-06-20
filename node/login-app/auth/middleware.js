const jwt = require("jsonwebtoken");
require("dotenv").config();

// User authentication
exports.loginAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (token == null) {
      res.send("Token invalid");
    }
    if (token) {
      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decodedToken) => {
          if (err) {
            res.status(403).send("This session has expired. Please login.");
          }

          if (!decodedToken.role || !decodedToken.username) {
            return res.status(401).send("Not Authorized");
          } else {
            req.user = decodedToken;
            next();
          }
        }
      );
    }
  } catch (err) {
    return res.status(403).send(err);
  }
};

// User authorization
exports.adminAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    if (req.user.role !== "admin") {
      return res.status(401).send("You are not authorized");
    } else {
      next();
    }
  } else {
    res.status(401);
    return res.send("Token not available");
  }
};
