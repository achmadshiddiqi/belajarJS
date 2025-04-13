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
