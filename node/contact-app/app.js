// Import fungsi dari contacts.js
const { pertanyaan, newContactData } = require("./contacts.js");

// Fungsi main
const main = async () => {
  const nama = await pertanyaan("Masukkan nama : ");
  const nomor = await pertanyaan("Masukkan nomor telepon : ");

  newContactData(nama, nomor);
};

// Jalankan fungsi main()
main();
