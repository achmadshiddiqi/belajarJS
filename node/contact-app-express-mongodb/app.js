const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

// MongoDB connect
require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

// Setup EJS
app.set("view engine", "ejs");
app.set("views", "./views");
// Built-in middleware
app.use(express.static("public"));
app.use(express.urlencoded());

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 6000 },
  })
);
app.use(flash());

// Halaman home
app.get("/", (req, res) => {
  res.render("index", { nama: "Shidqi", title: "Halaman Home" });
});

// Halaman about
app.get("/about", (req, res) => {
  res.render("about", { title: "Halaman About" });
});

// Halaman daftar contacts
app.get("/contacts", async (req, res) => {
  const contacts = await Contact.find();
  res.render("contacts", {
    title: "Halaman Contacts",
    contacts,
    msg: req.flash("msg"),
  });
});

// Halaman detail contact
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("detail", { title: "Halaman Detail Contact", contact });
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
