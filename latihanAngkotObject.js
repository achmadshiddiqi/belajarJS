function Angkot(sopir, trayek, kas, penumpang) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.kas = kas;
  this.penumpang = penumpang;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      return "Angkot masih kosong!";
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == namaPenumpang) {
          this.penumpang[i] = undefined;
          this.kas += bayar;
          return angkot1;
        } else if ((i = this.penumpang.length)) {
          return "Orang tersebut tidak ada di dalam angkot.";
        }
      }
    }
  };
}

var angkot1 = new Angkot("Sandhika Galih", ["Cicaheum", "Cibiru"], 0, []);
