const express = require("express");
const cookieParser = require("cookie-parser");
const { adminAuth, loginAuth } = require("./auth/middleware");
const { getUsers } = require("./auth/auth");
const User = require("./models/users");
const flash = require("connect-flash");
const session = require("express-session");

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

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Backend Routes
app.use("/", regisRoutes);

// Frontend Routes
// app.get("/", (req, res) => {
//   res.render("login", { title: "Login Page" });
// });

// app.get("/register", (req, res) => {
//   res.render("register", { title: "Register Page" });
// });

// app.get("/home", (req, res) => {
//   res.render("home", { title: "Home Page" });
// });

// app.get("/users", loginAuth, async (req, res) => {
//   const loggedUser = req.user;
//   const users = await getUsers();
//   res.render("users", { title: "User List Page", users, loggedUser });
// });

// app.get("/users/update/:username", loginAuth, adminAuth, async (req, res) => {
//   const user = await User.findOne({
//     username: req.params.username,
//   });
//   res.render("update", { title: "Update User Page", user });
// });

app.listen(port, () => {
  console.log(`Login App listening on port http://localhost:${port}`);
});
