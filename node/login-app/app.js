const express = require("express");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./auth/middleware");
const { getUsers } = require("./auth/auth");

const app = express();
const port = 3000;

// Built-in middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB Connection
require("./utils/db");

// Routes
const routes = require("./routes/route");

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Token auth
app.get("/admin", adminAuth, (req, res) => {
  res.send("Admin Routes");
});
app.get("/staff", userAuth, (req, res) => {
  res.send("Staff Routes");
});

app.use("/api/auth", routes);

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/register", (req, res) => {
  res.render("register", { title: "Register Page" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

app.get("/users", adminAuth, async (req, res) => {
  const users = await getUsers();
  res.render("users", { title: "User List Page", users });
});

app.listen(port, () => {
  console.log(`Login App listening on port http://localhost:${port}`);
});
