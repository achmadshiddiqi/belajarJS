// Method ubah gambar besar sesuai thumbnail yang diklik
const gBesar = document.querySelector(".gambar-besar img");
const thumbnail = document.querySelector(".thumbnail");

thumbnail.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    gBesar.src = e.target.src;
    gBesar.classList.add("fade");
    setTimeout(() => {
      gBesar.classList.remove("fade");
    }, 500);
  }
});
