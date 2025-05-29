const express = require("express");
const {
  getContacts,
  detailContact,
  newContactData,
  cekDupe,
  deleteContact,
  updateContact,
} = require("./utils/contacts");
const { body, validationResult } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const app = express();
const port = 3000;

// Gunakan EJS sebagai view engine pada express
app.set("view engine", "ejs");
// Tetapkan folder views
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
app.get("/contacts", (req, res) => {
  const contacts = getContacts();
  res.render("contacts", {
    title: "Halaman Contacts",
    contacts,
    msg: req.flash("msg"),
  });
});

// Halaman tambah contact
app.get("/contact/add", (req, res) => {
  res.render("register", { title: "Halaman Tambah Kontak" });
});

// Proses tambah contact
app.post(
  "/contact",
  body("nama").custom(async (value) => {
    const dupe = await cekDupe(value);
    if (dupe) {
      throw new Error(`Sudah ada kontak dengan nama ${value}`);
    }
  }),
  body("nama").trim().isAlpha().withMessage("Nama tidak valid 😪"),
  body("nomor")
    .trim()
    .isMobilePhone("id-ID")
    .withMessage("Pake nomor Indonesia!"),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      newContactData(req.body);
      // Kirim flash message
      req.flash("msg", `Kontak ${req.body.nama} berhasil ditambahkan`);
      res.redirect("/contacts");
    } else {
      // res.send({ error: result.array() });
      res.render("register", {
        title: "Halaman Tambah Kontak",
        errors: result.array(),
      });
    }
  }
);

// Delete contact
app.get("/contact/delete/:nama", (req, res) => {
  const contact = detailContact(req.params.nama);
  deleteContact(req.params.nama);
  req.flash("msg", `Kontak ${req.params.nama} berhasil dihapus`);
  res.redirect("/contacts");
});

// Edit contact
app.get("/contact/edit/:nama", (req, res) => {
  const contact = detailContact(req.params.nama);
  res.render("edit-contact", {
    title: "Halaman Ubah Data Contact",
    contact,
  });
});

// Proses edit contact
app.post(
  "/contact/update",
  body("nama").custom(async (value, { req }) => {
    const dupe = cekDupe(value);
    if (value !== req.body.oldNama && dupe) {
      throw new Error(`Sudah ada kontak dengan nama ${value}`);
    }
  }),
  body("nama").trim().isAlpha().withMessage("Nama tidak valid 😪"),
  body("nomor")
    .trim()
    .isMobilePhone("id-ID")
    .withMessage("Pake nomor Indonesia!"),
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      updateContact(req.body);
      // Kirim flash message
      req.flash("msg", `Kontak ${req.body.nama} berhasil diubah`);
      res.redirect("/contacts");
    } else {
      res.render("edit-contact", {
        title: "Halaman Ubah Data Contact",
        errors: result.array(),
        contact: req.body,
      });
    }
  }
);

// Halaman detail contact
app.get("/contact/:nama", (req, res) => {
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
