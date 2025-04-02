// Membuat Object
// 1. Literal Object
var mahasiswa = {
  nama: "Gorin",
  umur: 200,
  alamat: "Goa Hantu",
};

// 2. Function Declaration
function buatObjekMahasiswa(nama, umur, alamat) {
  var mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.umur = umur;
  mahasiswa.alamat = alamat;
  return mahasiswa;
}

var mhs = buatObjekMahasiswa("Banu", 1000, "Bumi");

// 3. Constructor
function Mahasiswa(nama, umur, alamat) {
  this.nama = nama;
  this.umur = umur;
  this.alamat = alamat;
}

var maba = new Mahasiswa("GORIEN", 999, "Namek");
