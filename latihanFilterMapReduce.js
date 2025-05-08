// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// Pilih video "JAVASCRIPT LANJUTAN"
const jsLanjut = videos
  .filter((video) => video.innerHTML.includes("JAVASCRIPT LANJUTAN"))

  // Ambil durasi masing-masing video
  // const durasi = [];
  // jsLanjut.forEach((video) => {
  //   durasi.push(video.getAttribute("data-duration"));
  // });
  .map((item) => item.dataset.duration)

  // Ubah durasi dari str menjadi int, ubah satuan menit menjadi detik
  // durasiInt = [];
  // durasi.forEach((item) => {
  //   durasiInt.push(
  //     parseInt(item.split(":")[0] * 60) + parseInt(item.split(":")[1])
  //   );
  // });
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // Jumlahkan durasi detik
  // sumDetik = durasiInt.reduce(
  //   (accumulator, currentvalue) => accumulator + currentvalue,
  //   0
  // );
  .reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);

// Ubah formatnya jadi jam-menit-detik
// const jam = Math.floor(sumDetik / (60 * 60));
// const menit = Math.floor((sumDetik % (60 * 60)) / 60);
// const detik = Math.floor(sumDetik % 60);
const jam = Math.floor(jsLanjut / (60 * 60));
const menit = Math.floor((jsLanjut % (60 * 60)) / 60);
const detik = Math.floor(jsLanjut % 60);

// Simpan di DOM
const jumlahVideo = document.querySelector(".jumlah-video");
const totalDurasi = document.querySelector(".total-durasi");

jumlahVideo.innerHTML = videos.filter((video) =>
  video.innerHTML.includes("JAVASCRIPT LANJUTAN")
).length;
totalDurasi.innerHTML = `${jam} Jam : ${menit} Menit : ${detik} Detik`;
