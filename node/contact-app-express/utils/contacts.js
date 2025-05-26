const fs = require("node:fs"); // Import File System
const validator = require("validator"); // Import Validator npm

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

module.exports = { getContacts, detailContact };
