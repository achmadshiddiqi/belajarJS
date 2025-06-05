const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Built-in middleware
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
require("./utils/db");

// Routes
const routes = require("./routes/route");

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/api/auth", routes);

app.listen(port, () => {
  console.log(`Login App listening on port http://localhost:${port}`);
});
