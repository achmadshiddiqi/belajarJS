const jwt = require("jsonwebtoken");
// Jwt secret
const jwtSecret =
  "2d385fb66ec6cf0807e147237e17948c1f56490a87396b2f9a6b3161c6475ec3";

exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401);
        return res.send("Not authorized");
      } else {
        if (decodedToken.role !== "admin") {
          res.status(401);
          return res.send("Not authorized");
        } else {
          next();
        }
      }
    });
  } else {
    res.status(401);
    return res.send("Token not available");
  }
};

exports.userAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401);
        return res.send("Not authorized");
      } else {
        if (decodedToken.role !== "Staff") {
          res.status(401);
          return res.send("Not authorized");
        } else {
          next();
        }
      }
    });
  } else {
    res.status(401);
    return res.send("Token not available");
  }
};
