const s = "()";
const isValid = function (s) {
  let results = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      results.push(")");
    } else if (s[i] == "[") {
      results.push("]");
    } else if (s[i] == "{") {
      results.push("}");
    } else if (results.pop() !== s[i]) {
      return false;
    }
  }
  return results.join("");
};

console.log(isValid(s));

// let results = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "[" && s[i + 1] == "]") {
//       results.push(s[i], s[i + 1]);
//       i++;
//     } else if (s[i] == "(" && s[i + 1] == ")") {
//       results.push(s[i], s[i + 1]);
//       i++;
//     } else if (s[i] == "{" && s[i + 1] == "}") {
//       results.push(s[i], s[i + 1]);
//       i++;
//     } else {
//       return false;
//     }
