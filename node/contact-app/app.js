const yargs = require("yargs");
const { newContactData, listContact } = require("./contacts");

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

yargs.parse();
