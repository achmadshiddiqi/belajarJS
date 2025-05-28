const strStr = (haystack, needle) => {
  results = haystack.includes(needle) ? haystack.indexOf(needle) : -1;
  return results;
};

const haystack = "sadbutsad";
const needle = "but";
console.log(strStr(haystack, needle));
