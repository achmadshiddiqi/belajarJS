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

// Fungsi membuat kontak baru
const newContactData = (nama, nomor) => {
  fs.readFile("data/contacts.json", "utf-8", (err, data) => {
    if (err) throw err;
    try {
      // Cek apakah file contacts.json kosong
      if (validator.isEmpty(data)) {
        data = "[]";
      }
      const datas = JSON.parse(data);

      // Validasi data kontak
      const dupeNama = datas.find((data) => data.nama === nama);
      const dupeNomor = datas.find((data) => data.nomor === nomor);
      if (dupeNama && dupeNomor) {
        return console.log("Data kontak sudah ada");
      }

      // Nama
      if (!validator.isAlpha(nama)) {
        return console.log("Nama tidak valid");
      }

      // Nomor HP
      if (!validator.isNumeric(nomor)) {
        return console.log("Nomor yang kamu tulis bukan berupa angka");
      } else if (!validator.isMobilePhone(nomor, "id-ID")) {
        return console.log("Silahkan gunakan nomor telepon Indonesia");
      }

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
    // rl.close();
  });
};

// Export fungsi untuk app.js
module.exports = { newContactData };
