// Event Handler
// onclick
// const p3 = document.querySelector(".p3");
// const ubahWarna = () => {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = ubahWarna;

// addEventListener()
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", () => {
//   const ul = document.querySelector("section#b ul");
//   const liBaru = document.createElement("li");
//   const teksLiBaru = document.createTextNode("Item baru");
//   liBaru.appendChild(teksLiBaru);
//   ul.appendChild(liBaru);
// });

// event handler tidak bisa melakukan 2 event yang triggernya sama
// karena event yang pertama akan tertimpa
// const p3 = document.querySelector(".p3");
// p3.onclick = () => {
//   p3.style.backgroundColor = "greenyellow";
// };
// p3.onclick = () => {
//   p3.style.color = "salmon";
// };

// addEventListener() bisa njae
const p3 = document.querySelector(".p3");
p3.addEventListener("mouseenter", () => {
  p3.style.backgroundColor = "greenyellow";
});
p3.addEventListener("mouseleave", () => {
  p3.style.backgroundColor = "white";
});
p3.addEventListener("click", () => {
  p3.style.color = "salmon";
});
