const User = require("../models/users");

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    res.status(400);
    return res.send("Password less than 8 characters");
  }
  try {
    await User.create({
      username,
      password,
    }).then((user) => {
      res.status(201).json({
        message: "User created successfully",
        user,
      });
    });
  } catch (err) {
    res.status(401);
    res.send(err);
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(401);
    return res.send("Username and password are required");
  }

  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(404);
      res.send("User not found");
    } else {
      res.status(200);
      res.send("Login successful");
    }
  } catch (err) {
    res.status(400);
    res.send(err);
  }
};
