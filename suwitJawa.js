var ulang = true;

while (ulang) {
  // Menangkap pilihan player
  var p = prompt("Pilih salah satu: gajah, semut, orang");

  // Menangkap pilihan komputer
  // Generate bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "orang";
  } else if (comp < 0.67 && comp > 0.34) {
    comp = "gajah";
  } else {
    comp = "semut";
  }

  // Menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "MENANG!";
    //   } else {
    //     hasil = "KALAH!";
    //   }
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    alert("KAGA BISA BACA!!??");
    ulang = False;
  }

  // Menampilkan hasil
  alert(p + " lawan " + comp + ", " + hasil);
  ulang = confirm("Ulang kaga bos?");
}
