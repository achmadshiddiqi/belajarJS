// Destructuring return dari function
// function operasiBilangan(a, b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = operasiBilangan(2, 3);
// console.log(jumlah);
// console.log(kali);

// Agar urutan return tidak berpengaruh
// gunakan object sebagai return value
// function operasiBilangan(a, b) {
//   return {
//     jumlah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { kali, bagi, jumlah, kurang } = operasiBilangan(2, 3);
// console.log(bagi);
// console.log(kali);
// console.log(kurang);
// console.log(jumlah);

// Bisa digunakan juga pada parameter function
// const mhs = {
//   nama: "Yudi",
//   umur: 22,
// };

// function salam({ nama, umur }) {
//   return `Saya ${nama}, ${umur} tahun.`;
// }

// console.log(salam(mhs));

// Jika objeknya bersarang
const mhs = {
  nama: "Yudi",
  umur: 22,
  jurusan: "Matematika",
  nilai: {
    tugas: 99,
    uts: 85,
    uas: 90,
  },
};

function salam({ nama, umur, jurusan, nilai: { tugas, uts, uas } }) {
  return `Saya ${nama}, ${umur} tahun. Saya mahasiswa ${jurusan}. Nilai tugas, uts dan uas saya ${tugas}, ${uts}, ${uas}.`;
}

console.log(salam(mhs));
