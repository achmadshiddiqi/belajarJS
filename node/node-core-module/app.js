// Import Core Module
const fs = require("node:fs"); // Module File System
const readline = require("node:readline"); // Module Readline

// Menulis string ke dalam file (Synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hola World!!!");
// } catch (error) {
//   console.log(error);
// }

// Menulis string ke dalam file (Asynchronous)
// fs.writeFile("data/test.txt", "Hola World!!!", (err) => {
//   if (err) console.log(err);
//   console.log("Data berhasil disimpan!");
// });

// Membaca file (Synchronous)
// const baca = fs.readFileSync("data/test.txt", "utf-8");
// console.log(baca);

// Membaca file (Asynchronous)
// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// Membuat interface dengan readline
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What's your name? : ", (nama) => {
//   rl.question("What's your number? : ", (number) => {
//     console.log(`Hi ${nama}, your number is ${number}`);
//     rl.close();
//   });
// });

// Latihan bikin daftar kontak dengan fs + readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama kamu : ", (nama) => {
  rl.question("Masukkan nomor kamu : ", (nomor) => {
    createNewContact(nama, nomor);
    rl.close();
  });
});

// Buat kontak baru berupa object
const createNewContact = (nama, nomor) => {
  fs.readFile("data/contacts.json", "utf-8", (err, data) => {
    if (err) throw err;
    const content = JSON.parse(data);
    const newContact = { nama, nomor };
    content.push(newContact);
    updateContacts(content);
  });
};

// Fungsi Simpan Kontak
const updateContacts = (contact) => {
  fs.writeFile(
    "data/contacts.json",
    JSON.stringify(contact, null, 2),
    "utf-8",
    (err) => {
      if (err) throw err;
      console.log(`Kontak berhasil disimpan!`);
    }
  );
};
