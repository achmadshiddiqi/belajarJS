const fs = require("node:fs"); // Import File System
const validator = require("validator"); // Import Validator npm
const chalk = require("chalk");

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
  const fileBuffer = fs.readFileSync("data/contacts.json", (err, data) => {
    if (err) throw err;
    // Cek apakah file contacts.json kosong
    if (validator.isEmpty(data)) {
      data = "[]";
    }
  });
  const datas = JSON.parse(fileBuffer);
  return datas;
};

// Fungsi membuat contact baru
const newContactData = async (nama, nomor) => {
  const datas = await getContacts();
  // Validasi data contact
  const dupeNama = datas.find((data) => data.nama === nama);
  const dupeNomor = datas.find((data) => data.nomor === nomor);
  if (dupeNama && dupeNomor) {
    return console.log(chalk`Data kontak {bgRed.bold sudah ada}`);
  } else if (dupeNomor) {
    return console.log(chalk`Nomor sudah {bgRed.bold ada}`);
  }

  // Nama
  if (!validator.isAlpha(nama)) {
    return console.log(chalk`Nama tidak {bgRed.bold valid}`);
  }

  // Nomor HP
  if (!validator.isNumeric(nomor)) {
    return console.log(
      chalk`Nomor yang kamu tulis bukan berupa {bgRed.bold angka}`
    );
  } else if (!validator.isMobilePhone(nomor, "id-ID")) {
    return console.log(
      chalk`Silahkan gunakan nomor telepon {bgRed.bold Indonesia}`
    );
  }

  const newData = { nama, nomor };
  datas.push(newData);
  updateContacts(datas);
};

// Fungsi update contacts.json
const updateContacts = (data) => {
  fs.writeFile("data/contacts.json", JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    const newCName = data[data.length - 1].nama;
    console.log(chalk`Kontak ${newCName} {bgGreen.bold berhasil disimpan!}`);
  });
};

// Fungsi list contact
const listContact = async () => {
  const datas = await getContacts();
  console.log(chalk`{bgBlue Daftar Kontak:}`);
  datas.forEach((data, i) => {
    console.log(`${i + 1}. Nama: ${data.nama}, Nomor: ${data.nomor}`);
  });
};

// Fungsi detail contact
const detailContact = async (nama) => {
  const datas = await getContacts();
  datas.forEach((data) => {
    if (data.nama.toLowerCase() === nama.toLowerCase()) {
      console.log(`Nama: ${data.nama}`);
      console.log(`Nomor: ${data.nomor}`);
    }
  });
  if (!datas.find((data) => data.nama.toLowerCase() === nama.toLowerCase())) {
    return console.log(chalk`Tidak ada kontak dengan nama {bgRed ${nama}}`);
  }
};

// Fungsi delete contact
const deleteContact = async (nama) => {
  const datas = await getContacts();
  let targetData = datas.find(
    (data) => data.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!targetData) {
    return console.log(chalk`Tidak ada kontak dengan nama {bgRed ${nama}}`);
  }

  const i = datas.indexOf(targetData);
  datas.splice(i, 1);

  fs.writeFile(
    "./data/contacts.json",
    JSON.stringify(datas, null, 2),
    (err) => {
      if (err) throw err;
      console.log(chalk`Kontak {bgRed ${nama}} {bgGreen berhasil dihapus!}`);
    }
  );
};

// Export fungsi untuk app.js
module.exports = { newContactData, listContact, detailContact, deleteContact };
