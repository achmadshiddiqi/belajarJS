// // Cari elemen yang mau dihapus
// const card = document.querySelector(".card");
// // Cari tombol x
// const x = document.querySelector(".close");
// // Bikin event hapus node container saat x diklik
// x.addEventListener("click", () => {
//   card.style.display = "none";
// });

// Kalo card nya banyak
// const x = document.querySelectorAll(".close");

// x.forEach((e) => {
//   e.addEventListener("click", () => {
//     e.parentElement.style.display = "none";
//   });
// });

// Method yang lain
// const nama = document.querySelector(".nama");
// console.log(nama.parentElement);
// console.log(nama.parentNode);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousElementSibling);

// Jika elemen tombolnya diganti dari span menjadi a
// Maka jika diclick akan hilang sepersekian setik saja
// Lalu akan muncul kembali ke-refresh karena a adalah hyperlink
// const x = document.querySelectorAll(".close");

// x.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// Event bubbling
// Jika ada event click di card
// Maka jika x diclik event yang berjalan adalah event card terlebih dahulu
// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     alert("ok");
//   });
// });
// untuk menanganinya tambah method stopPropagation() pada tombol x

// Menambahkan event pada container agar elemen card yang dibuat
// secara realtime bisa terpengaruh oleh eventnya
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});
