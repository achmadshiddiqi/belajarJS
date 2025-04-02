var nyawa = 3;

// Penjelasan
alert("Tebak angka dari 1-10.\n Kamu punya 3 kesempatan.");

// Generate Angka 1-10
var angka = Math.floor(Math.random() * 10 + 1);

while (nyawa > 0) {
  // Menebak Angka
  var tebak = prompt("Masukkan angka");

  // Rules
  var hasil = "";
  if (tebak == angka) {
    hasil = "BENAR!";
  } else {
    hasil = tebak < angka ? "Terlalu RENDAH!" : "Terlalu TINGGI!";
    nyawa--;
  }

  // Hasil
  if (nyawa != 0) {
    if (hasil == "BENAR!") {
      alert("Anda " + hasil + "\nAngka yang dicari adalah " + angka);
      alert("Arigatou");
      var nyawa = 0;
    } else {
      alert(hasil + "\nAyo masih ada " + nyawa + " kesempatan!");
    }
  } else {
    alert(hasil + "\nKesempatan anda sudah habis!");
    alert("Anda GAGAL! \nAngka yang dicari adalah " + angka);
  }
}
