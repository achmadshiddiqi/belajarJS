const User = require("../models/users");
const { scrypt, randomBytes, timingSafeEqual } = require("node:crypto");
const { promisify } = require("node:util");
const jwt = require("jsonwebtoken");
// Jwt secret
const jwtSecret =
  "2d385fb66ec6cf0807e147237e17948c1f56490a87396b2f9a6b3161c6475ec3";
const scryptAsync = promisify(scrypt);

// Fungsi hash password
const hashPassword = async (password) => {
  const salt = randomBytes(16).toString("hex");
  const buff = Buffer.from(await scryptAsync(password, salt, 64));
  return `${buff.toString("hex")}.${salt}`;
};

// Fungsi compare password on login
const comparePassword = async (storedPassword, password) => {
  const [hashedPassword, salt] = storedPassword.split(".");
  const hashedPasswordBuff = Buffer.from(hashedPassword, "hex");
  const passwordBuff = Buffer.from(await scryptAsync(password, salt, 64));
  return timingSafeEqual(hashedPasswordBuff, passwordBuff);
};

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    res.status(400);
    return res.send("Password less than 8 characters");
  }
  try {
    const hashedPassword = await hashPassword(password);
    await User.create({
      username,
      password: hashedPassword,
    }).then((user) => {
      const maxAge = 3 * 60 * 60;
      const token = jwt.sign(
        { id: user._id, username, role: user.role },
        jwtSecret,
        { expiresIn: maxAge }
      );
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
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
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404);
      res.send("User not found");
    } else {
      const check = await comparePassword(user.password, password);
      if (check) {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          { id: user._id, username, role: user.role },
          jwtSecret,
          { expiresIn: maxAge }
        );
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200);
        res.send("Login successful");
      } else {
        res.status(400);
        res.send("Login unsuccessful");
      }
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
