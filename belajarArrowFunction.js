// let tampilNama = (nama) => {
//   return `halo ${nama}`;
// };

// tampilNama("Gorin");

// Implisit Return
// let tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Gorin"));

// Lebih ringkas LAGI
// let hello = () => `Hello World`;
// console.log(hello());

let mahasiswa = ["Lorem", "Ipsum", "Dolor"];

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);

// console.log(jumlahHuruf);

// Return Objek bukan Array

let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));

console.table(jumlahHuruf);

// Konsep this pada arrow function
// const Mahasiswa = function () {
//   (this.nama = "UIA"),
//     (this.umur = 1001),
//     (this.sayHello = function () {
//       return `Halo saya ${this.nama}, umur saya ${this.umur}`;
//     });
// };

// const iu = new Mahasiswa();

// Ketika menggunakan arrow function hasilnya sama
// const Mahasiswa = function () {
//   (this.nama = "UIA"),
//     (this.umur = 1001),
//     (this.sayHello = () => {
//       return `Halo saya ${this.nama}, umur saya ${this.umur}`;
//     });
// };

// const iu = new Mahasiswa();

// Jika menggunakan obejct literal
// const Mahasiswa = {
//   nama: "UIA",
//   umur: 1001,
//   sayHello: function () {
//     return `Halo saya ${this.nama}, umur saya ${this.umur}.`;
//   },
// };

// Hasilnya undefined
// karena arrow function tidak mengenal this pada function
// const Mahasiswa = {
//   nama: "UIA",
//   umur: 1001,
//   sayHello: () => {
//     return `Halo saya ${this.nama}, umur saya ${this.umur}.`;
//   },
// };
