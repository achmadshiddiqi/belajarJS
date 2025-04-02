var s = "";

for (var i = 10; i > 0; i--) {
  for (var j = 0; j < i; j++) {
    s += " ";
  }

  for (var k = 10; k >= i; k--) {
    s += "*";
  }

  for (var l = 10; l > i; l--) {
    s += "*";
  }

  s += "\n";
}

console.log(s);
