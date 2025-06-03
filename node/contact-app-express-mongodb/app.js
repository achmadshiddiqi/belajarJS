const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const { body, validationResult } = require("express-validator");
const methodOverride = require("method-override");

// MongoDB connect
require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

// Setup Method Override
app.use(methodOverride("_method"));

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

// Halaman tambah contact
app.get("/contact/add", (req, res) => {
  res.render("register", { title: "Halaman Tambah Kontak" });
});

// Proses tambah contact
app.post(
  "/contact",
  body("nama").custom(async (value) => {
    const dupe = await Contact.findOne({ nama: value });
    if (dupe) {
      throw new Error(`Sudah ada kontak dengan nama ${value}`);
    }
  }),
  body("nama").trim().isAlpha().withMessage("Nama tidak valid 😪"),
  body("nomor")
    .trim()
    .isMobilePhone("id-ID")
    .withMessage("Pake nomor Indonesia!"),
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      await Contact.insertMany(req.body);
      // Kirim flash message
      req.flash("msg", `Kontak ${req.body.nama} berhasil ditambahkan`);
      res.redirect("/contacts");
    } else {
      res.render("register", {
        title: "Halaman Tambah Kontak",
        errors: result.array(),
      });
    }
  }
);

// Delete contact
app.delete("/contact", async (req, res) => {
  await Contact.deleteOne(req.body);
  req.flash("msg", `Kontak ${req.body.nama} berhasil dihapus`);
  res.redirect("/contacts");
});

// Edit contact
app.get("/contact/edit/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("edit-contact", {
    title: "Halaman Ubah Data Contact",
    contact,
  });
});

// Proses edit contact
app.put(
  "/contact",
  body("nama").custom(async (value, { req }) => {
    const dupe = await Contact.findOne({ nama: value });
    if (value !== req.body.oldNama && dupe) {
      throw new Error(`Sudah ada kontak dengan nama ${value}`);
    }
  }),
  body("nama").trim().isAlpha().withMessage("Nama tidak valid 😪"),
  body("nomor")
    .trim()
    .isMobilePhone("id-ID")
    .withMessage("Pake nomor Indonesia!"),
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      await Contact.updateOne(
        { _id: req.body._id },
        {
          $set: {
            nama: req.body.nama,
            nomor: req.body.nomor,
          },
        }
      );
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
app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("detail", { title: "Halaman Detail Contact", contact });
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
