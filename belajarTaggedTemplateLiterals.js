// Tagged Template
// const nama = "Achmad Shiddiqi Aulia";
// const umur = 24;

// function perkenalan(strings, ...values) {
//   //   let kalimat = "";
//   //   strings.forEach((kata, i) => {
//   //     kalimat += `${kata}${values[i] || ""}`;
//   //   });
//   //   return kalimat;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = perkenalan`Halo, saya ${nama}, umur saya ${umur} tahun.`;

// Highlight teks yang dicari
const nama = "Achmad Shiddiqi Aulia";
const umur = 24;

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, saya ${nama}, umur saya ${umur} tahun.`;
document.body.innerHTML = str;
