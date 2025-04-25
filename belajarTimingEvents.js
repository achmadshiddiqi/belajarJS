// setTimeOut()
// const ucapSalam = setTimeout(() => {
//   alert("Halo dek");
// }, 5000);

// Menghentikan setTimeout sebelum dieksekusi
// const tombol = document.getElementById("judul");
// tombol.addEventListener("click", () => {
//   clearTimeout(ucapSalam);
// });

// setInterval()
// const spam = setInterval(() => {
//   console.log("aaaa");
// }, 1000);

// Menghentikan setInterval sebelum laptop ngefreeze
// const tombol = document.getElementById("judul");
// tombol.addEventListener("click", () => {
//   clearInterval(spam);
// });

// Program hitung mundur
const tanggalTujuan = new Date("Apr 25, 2025 07:05:00").getTime();

const hitungMundur = setInterval(() => {
  const waktuSekarang = new Date().getTime();
  const selisihWaktu = tanggalTujuan - waktuSekarang;

  const hari = Math.floor(selisihWaktu / (1000 * 60 * 60 * 24));
  const jam = Math.floor(
    (selisihWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const menit = Math.floor((selisihWaktu % (1000 * 60 * 60)) / (1000 * 60));
  const detik = Math.floor((selisihWaktu % (1000 * 60)) / 1000);

  const judul = document.getElementById("judul");
  judul.innerHTML = `${hari} Hari : ${jam} Jam : ${menit} Menit : ${detik} Detik`;

  if (selisihWaktu < 0) {
    clearInterval(hitungMundur);
    judul.innerHTML = "Waktu Habis";
  }
}, 1000);
