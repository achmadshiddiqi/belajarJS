const plusOne = (digits) => {
  let isNine = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      isNine.push(digits[i]);
      digits.splice(i, 1);
    } else {
      isNine.unshift(digits[i]);
      digits.splice(i, 1);
      break;
    }
  }
  if (isNine.length !== 0) {
    const joinNine = isNine.join("");
    // const intLast = parseInt(joinNine) + 1;
    for (let k = 0; k < joinNine.length; k++) {
      if (k == 0 && isNine[k] !== 9) {
        digits.push(isNine[k] + 1);
      } else if (k == 0 && isNine[k] == 9) {
        digits.push(1, 0);
      } else {
        digits.push(0);
      }
    }
    // const strLast = intLast.toString().split("");
    // for (let j = 0; j < strLast.length; j++) {
    //   digits.push(parseInt(strLast[j]));
    // }
  } else {
    const dLastI = digits.length - 1;
    const dLast = digits[dLastI];
    digits.splice(dLastI, 1, dLast + 1);
  }
  return digits;
};

const d = [1, 2, 3];
const e = [
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
];
console.log(plusOne(e));
