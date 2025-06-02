const climb = (n) => {
  const tS = 2;
  const oS = 1;
  const res = [];
  for (let i = 0; i < n.length; i++) {
    if (n == 1) {
      return 1;
    } else if (n < oS + tS) {
      res.push(1);
    }
  }
};

const n = 2;
console.log(climb(n));
