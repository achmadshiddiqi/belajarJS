const express = require("express");
const { getContacts, detailContact } = require("./utils/contacts");
const app = express();
const port = 3000;

// Gunakan EJS sebagai view engine pada express
app.set("view engine", "ejs");
// Tetapkan folder views
app.set("views", "./views");

// Built-in middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { nama: "Shidqi", title: "Halaman Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Halaman About" });
});

app.get("/contacts", (req, res) => {
  const contacts = getContacts();
  res.render("contacts", { title: "Halaman Contacts", contacts });
});

app.get("/contacts/:nama", (req, res) => {
  const contact = detailContact(req.params.nama);
  res.render("detail", { title: "Halaman Detail Contact", contact });
});

app.use((req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
