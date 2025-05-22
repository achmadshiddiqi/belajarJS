const yargs = require("yargs");
const {
  newContactData,
  listContact,
  detailContact,
  deleteContact,
} = require("./contacts");

// Command add contact
yargs
  .command({
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
  })
  .demandCommand();

// Command list
yargs.command({
  command: "list",
  describe: "Menampilkan list kontak",
  handler() {
    listContact();
  },
});

// Command detail
yargs.command({
  command: "detail",
  describe: "Menampilkan detail sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// Command delete
yargs.command({
  command: "delete",
  describe: "Menghapus kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();
