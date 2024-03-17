// 977. Squares of sorted array
// solution:

var sortedSquares = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  nums.sort((a, b) => a - b);
  return nums;
};

// Example 1:
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// Example 2:
console.log(sortedSquares([-7, -3, 2, 3, 11]));
