// Multi-line string
console.log(`String 1
String 2
String 3`);

// Multi-line string HTML fragments
const mhs = {
  nama: "Boni",
  umur: 19,
  jurusan: "Bogor",
};

let el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="jurusan">${mhs.jurusan}</span>
</div>`;

console.log(el);

// Embedded expression
salam = "pagi";

console.log(`Halo, selamat ${salam}`);
// Embedded expression dengan ternary operator
x = 4;
console.log(`${x % 2 == 0 ? "Genap" : "Ganjil"}`);

// Expression interpolation
a = 20;
b = 1;

console.log(
  `Jika a ditambah dengan b, maka hasilnya adalah ${a + b}, bukan ${10 * a + b}`
);
