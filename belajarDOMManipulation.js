// InnerHTML
// Ubah judul
// const judul = document.getElementById("judul");
// judul.innerHTML = "Makan Bareng";

// Ubah section a
// const SectionA = document.querySelector("section#a");
// SectionA.innerHTML = "<div><p>ABCDEFG</p></div>";

// style
// const judul = document.querySelector("#judul");
// judul.style.backgroundColor = "salmon";
// judul.style.color = "greenyellow";

// attribute
// element.setAttribute()/getAttribute()/removeAttribute()
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "shidqi");

// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link-ig");

// gabisa buat nambah class karena class yang lama akan tertimpa
// const paragraf2 = document.querySelector(".p2");
// paragraf2.setAttribute("class", "label");

// classList
// element.classList.add()/remove()/toggle()/item()/contains()/replace()
// const paragraf2 = document.querySelector(".p2");
// paragraf2.classList.add("label");
// paragraf2.classList.remove("label");
// paragraf2.classList.toggle("biru-muda");
// paragraf2.classList.add("tes");
// paragraf2.classList.replace("tes", "tes1");

// Manipulasi Node
// 1
// buat elemen baru
// const pBaru = document.createElement("p");
// const textPBaru = document.createTextNode("Paragraf Baru");
// simpan teks ke dalam elemen baru
// pBaru.appendChild(textPBaru);
// simpan elemen baru di akhir section a
// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);

// 2
// buat elemen baru
const iBaru = document.createElement("li");
const textIBaru = document.createTextNode("Item Baru");
// simpan teks ke dalam elemen
iBaru.appendChild(textIBaru);
// cari parent dari elemen baru
const ul = document.querySelector("section#b ul");
// cari elemen yang posisinya berada setelah elemen kita nanti
const li2 = ul.querySelector("li:nth-child(2)");
// simpan elemen baru di posisi sebelum elemen li2
ul.insertBefore(iBaru, li2);

// 3
// Menghapus elemen
// cari parent dari elemen yang ingin dihapus
const sectionA = document.getElementById("a");
// cari elemen yang ingin dihapus
const link = document.querySelector("section#a a");
// hapus elemen
sectionA.removeChild(link);

// 4
// Mengganti elemen
// cari parent dari elemen yang ingin diganti
const sectionB = document.getElementById("b");
// cari elemen yang ingin diganti
const p4 = sectionB.getElementsByTagName("p")[0];
// buat elemen penggantinya
const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");
// masukan teks ke dalam elemen
h2Baru.appendChild(teksH2Baru);
// ganti elemen
sectionB.replaceChild(h2Baru, p4);
