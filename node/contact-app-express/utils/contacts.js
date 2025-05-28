const fs = require("node:fs"); // Import File System

// Membuat folden jika belum ada
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

// Membuat file jika belum ada
if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "", "utf-8");
}

// Fungsi read contacts.json
const getContacts = () => {
  const bufferFile = fs.readFileSync("data/contacts.json", "utf-8");
  const datas = JSON.parse(bufferFile);
  return datas;
};

// Fungsi detail contact
const detailContact = (nama) => {
  const datas = getContacts();
  const data = datas.find(
    (data) => data.nama.toLowerCase() === nama.toLowerCase()
  );
  return data;
};

// Fungsi add contact
const newContactData = (contact) => {
  const datas = getContacts();
  datas.push(contact);
  updateContacts(datas);
};

// Fungsi update contacts
const updateContacts = (data) => {
  return fs.writeFileSync("data/contacts.json", JSON.stringify(data, null, 2));
};

// Fungsi cek duplikat
const cekDupe = (nama) => {
  const contacts = getContacts();
  return contacts.find(
    (contact) => contact.nama.toLowerCase() == nama.toLowerCase()
  );
};

module.exports = { getContacts, detailContact, newContactData, cekDupe };
