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

exports.update = async (req, res, next) => {
  const { _id, role } = req.body;
  if (_id && role) {
    if (role === "admin") {
      const user = await User.findOne({ _id });
      try {
        if (user.role === "admin") {
          res.status(400);
          res.send("This user is already an admin");
        } else {
          await User.updateOne({ _id }, { $set: { role: role } });
          res.status(201);
          res.send("Update successful");
        }
      } catch (err) {
        res.status(401);
        res.send(err);
      }
    } else {
      res.status(400);
      res.send("Can't downgrade to staff");
    }
  } else {
    res.status(400);
    res.send("id and role are required");
  }
};

exports.deleteUser = async (req, res, next) => {
  const _id = req.body;
  if (_id) {
    const user = await User.findOne({ _id });
    try {
      if (user) {
        await User.deleteOne({ _id });
        res.status(201);
        res.send("Successfully deleted one user");
      } else {
        res.status(400);
        res.send("User not found");
      }
    } catch (err) {
      res.status(401);
      res.send(err);
    }
  } else {
    res.status(400);
    res.send("Choose a user to be deleted");
  }
};
