const searchInsert = (nums, target) => {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    nums.push(target);
    nums.sort((a, b) => {
      return a - b;
    });
    return nums.indexOf(target);
  }
};

const a = [1001];
const b = 2;

console.log(searchInsert(a, b));
