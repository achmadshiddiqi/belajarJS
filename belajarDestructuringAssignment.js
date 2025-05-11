// Destructuring array
// const perkenalan = ["Nama", "saya", "Ervin"];
// const [nama, saya, ervin] = perkenalan;

// console.log(nama);
// console.log(saya);
// console.log(ervin);

// Destructuring object
// const mhs = {
//   nama: "Wowo",
//   umur: 999,
// };

// const { nama, umur } = mhs;

// console.log(nama);
// console.log(umur);

// Swap value
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Destructuring return value pada function
// function tes() {
//   return [1, 2];
// }

// const [a, b] = tes();

// console.log(a);
// console.log(b);

// Rest parameter untuk destructuring array
// const [a, ...values] = [1, 2, 3, 4, 5, 6];

// console.log(a);
// console.log(values);

// Rest parameter untuk destructuring object
// const mhs = {
//   nama: "Wiwi",
//   umur: 19,
//   fakultas: "FMIPA",
//   jurusan: "Fisika",
//   nrp: 12345,
// };

// const { nama, ...values } = mhs;

// console.log(nama);
// console.log(values);

// Assign property ke variabel baru
// const mhs = {
//   nama: "Wiwi",
//   umur: 19,
//   fakultas: "FMIPA",
//   jurusan: "Fisika",
//   nrp: 12345,
// };

// const { nama: n, umur: u, fakultas: f, jurusan: j, nrp: N } = mhs;

// console.log(n);
// console.log(u);
// console.log(f);
// console.log(j);
// console.log(N);

// Memberi nilai default property + assign ke variabel baru
// const mhs = {
//   nama: "Wiwi",
//   umur: 19,
//   fakultas: "FMIPA",
//   jurusan: "Fisika",
//   nrp: 12345,
// };

// const {
//   nama: n,
//   umur: u,
//   fakultas: f,
//   jurusan: j,
//   nrp: N,
//   email: e = "default@email.com",
// } = mhs;

// console.log(n);
// console.log(u);
// console.log(f);
// console.log(j);
// console.log(N);
// console.log(e);

// Mengambil value property pada object, setelah dikirim sebagai parameter pada function
const mhs = {
  id: 123,
  nama: "Wiwi",
  umur: 19,
  fakultas: "FMIPA",
  jurusan: "Fisika",
  nrp: 12345,
};

function getId({ id, nrp }) {
  return [id, nrp];
}

console.log(getId(mhs));
