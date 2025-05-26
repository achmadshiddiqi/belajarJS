const s = "IX";
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  results = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      results -= roman[s[i]];
    } else {
      results += roman[s[i]];
    }
  }
  return results;
};

// results = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (split[i] == "I") {
//       if (split[i + 1] == "V") {
//         results += 4;
//         i++;
//       } else if (split[i + 1] == "X") {
//         results += 9;
//         i++;
//       } else {
//         results += 1;
//       }
//     } else if (split[i] == "V") {
//       results += 5;
//     } else if (split[i] == "X") {
//       if (split[i + 1] == "L") {
//         results += 40;
//         i++;
//       } else if (split[i + 1] == "C") {
//         results += 90;
//         i++;
//       } else {
//         results += 10;
//       }
//     } else if (split[i] == "L") {
//       results += 50;
//     } else if (split[i] == "C") {
//       if (split[i + 1] == "D") {
//         results += 400;
//         i++;
//       } else if (split[i + 1] == "M") {
//         results += 900;
//         i++;
//       } else {
//         results += 100;
//       }
//     } else if (split[i] == "D") {
//       results += 500;
//     } else if (split[i] == "M") {
//       results += 1000;
//     }
//   }
//   return results;

console.log(romanToInt(s));
