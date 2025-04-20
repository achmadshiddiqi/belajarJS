// document.getElementById() outputnya element
// const judul = document.getElementById("judul");
// judul.style.color = "salmon";
// judul.style.backgroundColor = "lightgreen";
// judul.style.borderColor = "purple";
// judul.innerHTML = "Mabar";

// document.getElementsByTagName() outputnya HTMLCollection
// HTMLCollection berbentuk array
// const paragraf = document.getElementsByTagName("p");
// for (let i = 0; i < paragraf.length; i++) {
//   paragraf[i].style.backgroundColor = "grey";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "36px";

// document.getElementsByClassName() outputnya HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Tes 1 2 3";

// document.querySelector() outputnya element
// const p4 = document.querySelector("#b p");
// p4.style.color = "greenyellow";

// const item2 = document.querySelector("section#b ul li:nth-child(2)");
// item2.style.color = "green";

// document.querySelectorAll() outputnya nodelist
// const paragraf = document.querySelectorAll("p");
// for (let i = 0; i < paragraf.length; i++) {
//   paragraf[i].style.backgroundColor = "salmon";
// }

// Mengubah node root
const SectionB = document.getElementById("b");
const p4 = SectionB.querySelector("p");
p4.style.color = "salmon";
