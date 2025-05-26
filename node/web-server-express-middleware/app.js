const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

// Gunakan EJS sebagai view engine pada express
app.set("view engine", "ejs");
// Tetapkan folder views
app.set("views", "./views");

// Third-party middleware
app.use(morgan("dev"));

// Built-in middleware
app.use(express.static("public"));

// Application-level middleware
// app.use((req, res, next) => {
//   console.log(Date.now());
//   next();
// });

app.get("/", (req, res) => {
  // res.sendFile("./index.html", { root: __dirname });
  res.render("index", { nama: "Shidqi", title: "Halaman Home" });
});

app.get("/about", (req, res) => {
  // res.sendFile("./about.html", { root: __dirname });
  res.render("about", { title: "Halaman About" });
});

app.get("/contacts", (req, res) => {
  // res.sendFile("./contacts.html", { root: __dirname });
  res.render("contacts", { title: "Halaman Contact" });
});

app.get("/products/:code", (req, res) => {
  res.send(req.params.code + req.query.category);
});

app.listen(port, () => {
  console.log(`App listening on por ${port}`);
});
