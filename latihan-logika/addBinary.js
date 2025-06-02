const addBinary = (a, b) => {
  const res = [];
  let carry = false;
  for (let i = 3; i > 0; i--) {
    if (a[i] == 1 && b[i] == 1) {
      if (carry == true) {
        res.unshift(1);
        carry = true;
      } else {
        res.unshift(0);
        carry = true;
      }
      carry = true;
      res.unshift(0);
    } else if (a[i] == 1 && b[i] == 0) {
      if (carry == true) {
        res.unshift(0);
        carry = true;
      } else {
        res.unshift(1);
      }
    } else if (a[i] == 0 && b[i] == 1) {
      if (carry == true) {
        res.unshift(0);
        carry = true;
      } else {
        res.unshift(1);
      }
    } else {
      if (carry == true) {
        res.unshift(1);
        carry = false;
      } else {
        res.unshift(0);
      }
    }
  }
  return res;
};

const a = "11";
const b = "1";
console.log(addBinary(a, b));
console.log(a[3]);
