const hola = (nama, umur) => {
  console.log(`Halo saya ${nama}, saya ${umur} tahun.`);
};

const nip = 123;

module.exports.hola = hola;
module.exports.nip = nip;
