const express = require("express");
const cookieParser = require("cookie-parser");
const { adminAuth, loginAuth } = require("./auth/middleware");
const { getUsers } = require("./auth/auth");
const User = require("./models/users");

const app = express();
const port = 3000;

// Built-in middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// MongoDB Connection
require("./utils/db");

// Routes
const routes = require("./routes/route");

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Token auth
// app.get("/admin", loginAuth, (req, res) => {
//   res.send("Admin Routes");
// });
// app.get("/staff", userAuth, (req, res) => {
//   res.send("Staff Routes");
// });

// Backend Routes
app.use("/api/auth", routes);

// Frontend Routes
app.get("/", (req, res) => {
  res.render("login", { title: "Login Page" });
});

app.get("/register", (req, res) => {
  res.render("register", { title: "Register Page" });
});

app.get("/home", loginAuth, (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/users", loginAuth, async (req, res) => {
  const loggedUser = req.user;
  const users = await getUsers();
  res.render("users", { title: "User List Page", users, loggedUser });
});

app.get("/users/update/:username", loginAuth, adminAuth, async (req, res) => {
  const user = await User.findOne({
    username: req.params.username,
  });
  res.render("update", { title: "Update User Page", user });
});

app.listen(port, () => {
  console.log(`Login App listening on port http://localhost:${port}`);
});
