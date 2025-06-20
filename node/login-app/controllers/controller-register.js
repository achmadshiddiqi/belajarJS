const User = require("../models/users");
const { scrypt, randomBytes } = require("node:crypto");
const { promisify } = require("node:util");
const scryptAsync = promisify(scrypt);

// Hash password
const hashPassword = async (password) => {
  const salt = randomBytes(16).toString("hex");
  const buff = Buffer.from(await scryptAsync(password, salt, 64));
  return `${buff.toString("hex")}.${salt}`;
};

exports.viewRegister = (req, res) => {
  res.render("register", { title: "Register Page", msg: req.flash("msg") });
};

exports.saveRegister = async (req, res, next) => {
  const { username, password } = req.body;
  if (password.length < 8) {
    req.flash("msg", "Password less than 8 characters");
    return res.status(400).redirect("/");
  }
  try {
    const hashedPassword = await hashPassword(password);
    await User.create({
      username,
      password: hashedPassword,
    }).then((user) => {
      // const { password, ...userData } = user._doc;
      res.status(201).send("Register Successful");
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
