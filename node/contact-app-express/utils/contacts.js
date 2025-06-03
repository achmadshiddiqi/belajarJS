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
  const data = datas.find((data) => data.nama === nama);
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

// Fungsi delete contact
const deleteContact = (nama) => {
  const contacts = getContacts();
  let targetData = contacts.find((contact) => contact.nama === nama);

  if (!targetData) {
    return console.log(`Tidak ada kontak dengan nama ${nama}`);
  }

  const i = contacts.indexOf(targetData);
  contacts.splice(i, 1);

  updateContacts(contacts);
};

// Fungsi update contact
const updateContact = (contactBaru) => {
  const contacts = getContacts();
  const targetData = contacts.find((data) => data.nama == contactBaru.oldNama);

  const i = contacts.indexOf(targetData);
  delete contactBaru.oldNama;
  contacts.splice(i, 1, contactBaru);
  updateContacts(contacts);
};

module.exports = {
  getContacts,
  detailContact,
  newContactData,
  cekDupe,
  deleteContact,
  updateContact,
};
