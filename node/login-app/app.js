const express = require("express");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./auth/middleware");

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

app.listen(port, () => {
  console.log(`Login App listening on port http://localhost:${port}`);
});
