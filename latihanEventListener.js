// Ambil elemen h1
const h1 = document.querySelector("h1");

// Buat tombol untuk ubah warna
const body = document.body;
const tombol = document.createElement("button");
const teksTombol = document.createTextNode("Ubah Warna");
tombol.appendChild(teksTombol);
h1.after(tombol);

// Styling tombol wkwk
const tbl = document.querySelector("button");
tbl.style.padding = "10px";
tbl.style.border = "2px solid orange";
tbl.style.borderRadius = "10px";
tbl.style.backgroundColor = "yellow";

// Bikin method ubah warna
tbl.addEventListener("click", () => {
  body.classList.toggle("salmon");
});

// Bikin tombol random warna
const tRandomWarna = document.createElement("button");
const teksTRandomWarna = document.createTextNode("Acak Warna");
tRandomWarna.appendChild(teksTRandomWarna);
tbl.after(tRandomWarna);

// Tambah attribute ke tombol random warna
tRandomWarna.setAttribute("type", "button");
tRandomWarna.setAttribute("id", "tRandomWarna");

// Styling tombol random warna
const tblRandomWarna = document.getElementById("tRandomWarna");
tblRandomWarna.style.padding = "10px";
tblRandomWarna.style.border = "2px solid skyblue";
tblRandomWarna.style.borderRadius = "10px";
tblRandomWarna.style.backgroundColor = "lightblue";

// Bikin method acak warna
tblRandomWarna.addEventListener("click", () => {
  const r = Math.round(Math.random() * 254 + 1);
  const g = Math.round(Math.random() * 254 + 1);
  const b = Math.round(Math.random() * 254 + 1);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Cari slider merah
const sMerah = document.querySelector("input[name=sMerah]");

// Bikin method buat nangkep value slider merah
sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Cari slider hijau
const sHijau = document.querySelector("input[name=sHijau]");

// Bikin method buat nangkep value slider mhijau
sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Cari slider biru
const sBiru = document.querySelector("input[name=sBiru]");

// Bikin method buat nangkep value slider biru
sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// Bikin method ubah warna backgroung sesuai posisi mouse
body.addEventListener("mousemove", (event) => {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  console.log(`${xPos}, ${yPos}`);
  body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
