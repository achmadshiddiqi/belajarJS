// Coba tidak bisa resolve jika tidak dipanggil menggunakan then
// const coba = new Promise((resolve, reject) => {
//   waktu = 3000;
//   if (waktu < 5000) {
//     setTimeout(() => {
//       resolve("sukses");
//     }, waktu);
//   } else {
//     reject("kelamaan");
//   }
// });

// console.log(coba);

// Jika promise disimpan di dalam function
// maka bisa resolve jika menggunakan Async Await
function cobaPromise() {
  return new Promise((resolve, reject) => {
    waktu = 3000;
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
  const coba = await cobaPromise();
  console.log(coba);
}

cobaAsync();
