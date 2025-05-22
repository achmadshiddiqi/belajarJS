const yargs = require("yargs");
const { newContactData } = require("./contacts");

// // Import fungsi dari contacts.js
// const { pertanyaan, newContactData } = require("./contacts.js");

yargs.command({
  command: "add",
  describe: "Menambahkan kontak baru",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
    nomor: {
      describe: "Nomor HP",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    newContactData(argv.nama, argv.nomor);
  },
});

yargs.parse();

// // Fungsi main
// const main = async () => {
//   const nama = await pertanyaan("Masukkan nama : ");
//   const nomor = await pertanyaan("Masukkan nomor telepon : ");

//   newContactData(nama, nomor);
// };

// // Jalankan fungsi main()
// main();
