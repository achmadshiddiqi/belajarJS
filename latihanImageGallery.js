// Method ubah gambar besar sesuai thumbnail yang diklik
const gBesar = document.querySelector(".gambar-besar img");
const thumbnail = document.querySelector(".thumbnail");

thumbnail.addEventListener("click", (e) => {
  getThumbAttribute = e.target.getAttribute("src");
  if (e.target.className == "thumb") {
    gBesar.setAttribute("src", getThumbAttribute);
  }
});
