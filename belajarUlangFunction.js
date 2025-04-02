function jumlahVolumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}

console.log(jumlahVolumeDuaKubus(2, 2));

function faktorial(a) {
  if (a === 0) {
    return 1;
  }
  return a * faktorial(a - 1);
}

console.log(faktorial(5));
