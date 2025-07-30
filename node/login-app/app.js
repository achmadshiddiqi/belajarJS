const express = require("express");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const session = require("express-session");
const Token = require("./models/tokens");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

// Built-in middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    cookie: { maxAge: 60000 },
  })
);
app.use(flash());

// MongoDB Connection
require("./utils/db");

// Routes
const regisRoutes = require("./routes/router-register");
const loginRoutes = require("./routes/router-login");
const homeRoutes = require("./routes/router-home");
const usersRoutes = require("./routes/router-users");
const jobRoutes = require("./routes/router-applyJob");

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Backend Routes
app.use("/", regisRoutes);
app.use("/login", loginRoutes);
app.use("/home", homeRoutes);
app.use("/users", usersRoutes);
app.use("/job", jobRoutes);

// Refresh Token Route
app.post("/refresh/token", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).send("Not authorized");

  const check = await Token.findOne({ r_token: refreshToken });
  if (!check) return res.status(401).send("Not authorized");

  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: true,
  });
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = jwt.sign(
      { id: user._id, user: user.username, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: true,
    });
    return res.status(201).send("Successfully refresh token");
  });
});

app.listen(port, () => {
  console.log(`Login App listening on port http://localhost:${port}`);
});
