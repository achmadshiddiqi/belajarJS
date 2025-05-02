// // Cari elemen yang mau dihapus
// const card = document.querySelector(".card");
// // Cari tombol x
// const x = document.querySelector(".close");
// // Bikin event hapus node container saat x diklik
// x.addEventListener("click", () => {
//   card.style.display = "none";
// });

// Kalo card nya banyak
const x = document.querySelectorAll(".close");

x.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.style.display = "none";
  });
});

// Method yang lain
const nama = document.querySelector(".nama");
console.log(nama.parentElement);
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling);
console.log(nama.nextElementSibling);
console.log(nama.previousElementSibling);
