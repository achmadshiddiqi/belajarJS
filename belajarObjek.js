// Membuat Object
// 1. Literal Object
// var mahasiswa = {
//   nama: "Gorin",
//   umur: 200,
//   alamat: "Goa Hantu",
//   energi: 10,
//   makan: function (porsi) {
//     return porsi * 10 + this.energi;
//   },
// };

// 2. Function Declaration
// function buatObjekMahasiswa(nama, umur, alamat) {
//   var mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.umur = umur;
//   mahasiswa.alamat = alamat;
//   return mahasiswa;
// }

// var mhs = buatObjekMahasiswa("Banu", 1000, "Bumi");

// 3. Constructor
function Mahasiswa(nama, umur, alamat) {
  this.nama = nama;
  this.umur = umur;
  this.alamat = alamat;
}

// var maba = new Mahasiswa("GORIEN", 999, "Namek");

// 4. Object.create()
// let AktivitasHP = {
//   browsing: function (jam) {
//     this.baterai -= jam * 3;
//     if (this.baterai < 0) {
//       this.baterai = 0;
//       return console.log(`Baterai sudah habis!!`);
//     } else if (this.baterai > 0) {
//       return console.log(`Browsing menghabiskan baterai ${jam * 3}%`);
//     }
//   },

//   gaming: function (jam) {
//     this.baterai -= jam * 5;
//     if (this.baterai < 0) {
//       this.baterai = 0;
//       return console.log(`Baterai sudah habis!!`);
//     } else if (this.baterai > 0) {
//       return console.log(`Bermain game menghabiskan baterai ${jam * 5}%`);
//     }
//   },

//   charge: function (jam) {
//     this.baterai += jam * 50;
//     if (this.baterai > 100) {
//       this.baterai = 100;
//       return console.log(`Baterai telah terisi penuh!!`);
//     } else {
//       return console.log(`Baterai telah terisi ${jam * 50}%`);
//     }
//   },
// };

// function HP(baterai) {
//   let Hape = Object.create(AktivitasHP);
//   Hape.baterai = baterai;
//   return Hape;
// }

// let Rina = HP(100);

// 5. Constructor dengan memanfaatkan prototype
function HP(baterai) {
  this.baterai = baterai;
}

HP.prototype.browsing = function (jam) {
  this.baterai -= jam * 3;
  if (this.baterai < 0) {
    this.baterai = 0;
    return console.log(`Baterai sudah habis!!`);
  } else if (this.baterai > 0) {
    return console.log(`Browsing menghabiskan baterai ${jam * 3}%`);
  }
};

HP.prototype.gaming = function (jam) {
  this.baterai -= jam * 5;
  if (this.baterai < 0) {
    this.baterai = 0;
    return console.log(`Baterai sudah habis!!`);
  } else if (this.baterai > 0) {
    return console.log(`Bermain game menghabiskan baterai ${jam * 5}%`);
  }
};

HP.prototype.charge = function (jam) {
  this.baterai += jam * 50;
  if (this.baterai > 100) {
    this.baterai = 100;
    return console.log(`Baterai telah terisi penuh!!`);
  } else {
    return console.log(`Baterai telah terisi ${jam * 50}%`);
  }
};

let Rina = new HP(100);
