const User = require("../models/users");
const { scrypt, randomBytes, timingSafeEqual } = require("node:crypto");
const { promisify } = require("node:util");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// Jwt secret
// const jwtSecret =
//   "2d385fb66ec6cf0807e147237e17948c1f56490a87396b2f9a6b3161c6475ec3";
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;
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
    return res.status(400).send("Password less than 8 characters");
  }
  try {
    const hashedPassword = await hashPassword(password);
    await User.create({
      username,
      password: hashedPassword,
    }).then((user) => {
      const { password, ...userData } = user._doc;
      res.status(201).json({
        message: "User created successfully",
        userData,
      });
    });
  } catch (err) {
    return res.status(401).send(err);
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).send("Username and password are required");
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send("User not found");
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
        return res.status(200).send("Login successful");
      } else {
        return res.status(400).send("Login unsuccessful");
      }
    }
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.update = async (req, res, next) => {
  const { _id, role } = req.body;
  const user = await User.findOne({ _id });
  if (_id && role) {
    if (role === "admin") {
      try {
        if (user.role === "admin") {
          return res.status(400).send("This user is already an admin");
        } else {
          await User.updateOne({ _id }, { $set: { role: role } });
          return res.status(201).send("Update successful");
        }
      } catch (err) {
        return res.status(401).send(err);
      }
    } else {
      if (user.role === "Staff") {
        return res.status(400).send("This user is already a staff");
      } else {
        return res.status(201).send("Update successful");
      }
    }
  } else {
    return res.status(400).send("id and role are required");
  }
};

exports.deleteUser = async (req, res, next) => {
  const _id = req.body;

  if (_id) {
    const user = await User.findOne({ _id });
    try {
      if (user) {
        await User.deleteOne({ _id });
        return res.status(201).send("Successfully deleted one user");
      } else {
        return res.status(400).send("User not found");
      }
    } catch (err) {
      return res.status(401).send(err);
    }
  } else {
    return res.status(400).send("Choose a user to be deleted");
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find({ role: "Staff" });
    return users;
  } catch (err) {
    res.status(401);
    res.send(err);
  }
};
