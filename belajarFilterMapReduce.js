const angka = [-9, 7, 5, 2, -3, 6, -1, 1, 8];

// Mencari angka yang >= 3
// Jika menggunakan for
// const hasil = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     hasil.push(angka[i]);
//   }
// }
// console.log(hasil);

// Jika menggunakan Filter
// const hasil = angka.filter((a) => a > 3);
// console.log(hasil);

// Penggunaan Map
// const angka1 = angka.map((a) => a * 2);
// console.log(angka1);
const target = 121;
const nums = [2, 7, 11, 15];
var isPalindrome = function (x) {
  a = x.toString().split("");
  b = [];
  console.log(a.length);
  for (i = a.length; i >= 0; i--) {
    console.log(parseInt(a[i - 1]));
  }

  return b;
  return parseInt(a.join("")) == b.join("");
};

// Penggunaan Reduce
// Contohnya untuk menjumlahkan seluruh angka di array
// const angka1 = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(angka1);

// Method Chaining
// 1. Cari angka > 1
// 2. Hasilnya dikali 3
// 3. Jumlahkan semuanya
// const angka1 = angka
//   .filter((a) => a > 1)
//   .map((b) => b * 3)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(angka1);
