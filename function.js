cth = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  a = strs[0];
  for (let i = 1; i < a.length; i++) {
    s = strs[i];
    while (a !== s.substring(0, a.length)) {
      a.length--;
      if (a.length == 0) {
        return "";
      }
      a = a.substring(0, a.length);
    }
  }
  return a;
};
