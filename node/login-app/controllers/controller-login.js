const Token = require("../models/tokens");
const User = require("../models/users");
const { scrypt, timingSafeEqual } = require("node:crypto");
const { promisify } = require("node:util");
const scryptAsync = promisify(scrypt);
const jwt = require("jsonwebtoken");

// Compare password on login
const comparePassword = async (storedPassword, password) => {
  const [hashedPassword, salt] = storedPassword.split(".");
  const hashedPasswordBuff = Buffer.from(hashedPassword, "hex");
  const passwordBuff = Buffer.from(await scryptAsync(password, salt, 64));
  return timingSafeEqual(hashedPasswordBuff, passwordBuff);
};

// Generate Access Token
const generateAccessToken = (user, username) => {
  return jwt.sign(
    { id: user._id, username, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
};

// Generate Refresh Token
const generateRefreshToken = (user, username) => {
  return jwt.sign(
    { id: user._id, username, role: user.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
};

exports.viewLogin = (req, res) => {
  res.render("login", { title: "Login Page", msg: req.flash("msg") });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    req.flash("msg", "Username and password are required");
    return res.status(400).redirect("/login");
  }

  try {
    const user = await User.findOne({ username }, "+password");
    if (!user) {
      req.flash("msg", "User not found");
      return res.status(401).redirect("/login");
    } else {
      const check = await comparePassword(user.password, password);
      if (!check) {
        req.flash("msg", "Login unsuccessful, wrong password or username");
        return res.status(401).redirect("/login");
      } else {
        const accessToken = generateAccessToken(user, user.username);
        const refreshToken = generateRefreshToken(user, user.username);
        await Token.insertOne({
          r_token: refreshToken,
          userId: user._id,
          expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: true,
          sameSite: true,
        });
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: true,
        });
        req.flash("msg", `Welcome ${user.username}`);
        return res.status(201).redirect("/home");
      }
    }
  } catch (err) {
    res.status(401);
    return console.log(err);
  }
};

exports.logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).send("Unauthorized");

  try {
    await Token.deleteOne({ r_token: refreshToken });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    return res.status(201).redirect("/login");
  } catch (err) {
    if (err) return res.status(401).send(err);
  }
};
