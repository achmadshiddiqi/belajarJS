// Method ubah gambar besar sesuai thumbnail yang diklik
const gBesar = document.querySelector(".gambar-besar img");
const thumbnail = document.querySelector(".thumbnail");
const thumbs = document.querySelectorAll(".thumb");

thumbnail.addEventListener("click", (e) => {
  if (e.target.className == "thumb") {
    gBesar.src = e.target.src;
    gBesar.classList.add("fade");
    setTimeout(() => {
      gBesar.classList.remove("fade");
    }, 500);

    thumbs.forEach((thumb) => {
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
