// Callback
// Synchronous Callback
// function salam(nama) {
//   alert(`Halo, nama saya ${nama}`);
// }

// function tampilSalam(callback) {
//   const nama = prompt("Masukan nama: ");
//   callback(nama);
// }

// tampilSalam(salam);

// Masalah pada synchonous callback
// const mhs = [
//   {
//     id: 123,
//     nama: "Dori",
//     umur: 20,
//     jurusan: "MTK",
//   },
//   {
//     id: 124,
//     nama: "Doni",
//     umur: 20,
//     jurusan: "Fisika",
//   },
//   {
//     id: 125,
//     nama: "Dodi",
//     umur: 20,
//     jurusan: "Kimia",
//   },
//   {
//     id: 126,
//     nama: "Dobi",
//     umur: 20,
//     jurusan: "Biologi",
//   },
//   {
//     id: 127,
//     nama: "Dovi",
//     umur: 20,
//     jurusan: "SI",
//   },
//   {
//     id: 128,
//     nama: "Dowi",
//     umur: 20,
//     jurusan: "TI",
//   },
// ];

// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     const date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readystate === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

getDataMahasiswa(
  "mahasiswa.json",
  (result) => {
    const mhs = JSON.parse(result);
    mhs.forEach((m) => console.log(m.nama));
    console.log("sukses");
  },
  () => {
    console.log("error");
  }
);
