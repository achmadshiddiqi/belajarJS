// .catch tidak bisa digunakan untuk mengambil error
// pada kasus ini
// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     waktu = 3000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("sukses");
//       }, waktu);
//     } else {
//       reject("kelamaan");
//     }
//   });
// }

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// cobaAsync();

// Maka perlu menggunakan block try {} dan catch() {}
function cobaPromise() {
  return new Promise((resolve, reject) => {
    waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("sukses");
      }, waktu);
    } else {
      reject("kelamaan");
    }
  });
}

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.log(error);
  }
}

cobaAsync();
