// const mhs = {
//   nama: "Pulu",
//   umur: 20,
//   jurusan: "Matematika",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="jurusan">${mhs.jurusan}</span>
// </div>`;

// Looping
// const mhs = [
//   {
//     nama: "Andi",
//     email: "andi@gmail.com",
//   },
//   {
//     nama: "Ando",
//     email: "ando@gmail.com",
//   },
//   {
//     nama: "Andu",
//     email: "andu@gmail.com",
//   },
//   {
//     nama: "Ande",
//     email: "ande@gmail.com",
//   },
//   {
//     nama: "Anda",
//     email: "anda@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `<ul>
//       <li>${m.nama}</li>
//       <li>${m.email}</li>
//     </ul>`
//     )
//     .join("")}
// </div>`;

// Conditional
// ternary
// const lagu = {
//   judul: "Tetap Dalam Jiwa",
//   penyanyi: "Isyana Sarasvati",
//   feat: "Rayi Putra",
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(Feat. ${lagu.feat})` : ``}</li>
//   </ul>
// </div>`;

// Nested
const mhs = {
  nama: "Devi",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "Analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan Sistem Berorientasi Objek",
  ],
};

function cetakMatakuliah(matkul) {
  return `
  <ol>
    ${matkul.map((item) => `<li>${item}</li>`).join("")}
  </ol>
  `;
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester: ${mhs.semester}</span>
  <h4>Mata Kuliah</h4>
  ${cetakMatakuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
