// function init() {
//   let nama = "Gorin";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// Kegunaan Closure
// 1. Untuk membuat function factories
// function ucapSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}.`);
//   };
// }

// let selamatPagi = ucapSalam("Pagi");
// let selamatSiang = ucapSalam("Siang");
// let selamatMalam = ucapSalam("Malam");

// selamatPagi("Doni");

// 2. Agar variabel tidak terganggu di scope global
// Variabel di masukin ke scope function
// let hitung = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = hitung();

// console.log(a());

// Agar tidak perlu memanggil inner function maka menggunakan
// Immediately Invoked function
let hitung = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(hitung());
console.log(hitung());
