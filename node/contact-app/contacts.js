const fs = require("node:fs"); // Import File System
const readline = require("node:readline"); // Import Readline
const validator = require("validator"); // Import Validator npm

// Deklarasi input dan output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Membuat folden jika belum ada
if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

// Membuat file jika belum ada
if (!fs.existsSync("./data/contacts.json")) {
  fs.writeFileSync("./data/contacts.json", "", "utf-8");
}

// Membuat Interface
const pertanyaan = (teks) => {
  return new Promise((resolve, reject) => {
    rl.question(teks, (input) => {
      resolve(input);
    });
  });
};

// Fungsi membuat kontak baru
const newContactData = (nama, nomor) => {
  fs.readFile("data/contacts.json", "utf-8", (err, data) => {
    if (err) throw err;
    try {
      if (validator.isEmpty(data)) {
        data = "[]";
      } else if (!validator.isMobilePhone(nomor, "id-ID")) {
        return console.log("Silahkan gunakan nomor telepon Indonesia");
      }
      const datas = JSON.parse(data);
      const newData = { nama, nomor };
      datas.push(newData);
      updateContacts(datas);
    } catch (err) {
      console.log(err);
    }
  });
};

// Fungsi update contacts.json
const updateContacts = (data) => {
  fs.writeFile("data/contacts.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log(`Kontak ${data[data.length - 1].nama} berhasil disimpan!`);
    rl.close();
  });
};

// Export fungsi untuk app.js
module.exports = { pertanyaan, newContactData };
