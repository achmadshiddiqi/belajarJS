const lengthOf = (s) => {
  const split = s.trim().split(/\s+/);
  const index = split.length - 1;
  return split[index].length;
};
const a = "   fly me   to   the moon  ";
console.log(lengthOf(a));
