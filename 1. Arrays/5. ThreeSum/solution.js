// 15. 3Sum
// solution:

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] !== nums[i - 1]) {
      // a + b + c = 0
      // a + b = -c
      let c = -nums[i];
      let a = i + 1;
      let b = nums.length - 1;
      while (a < b) {
        let sum = nums[a] + nums[b];
        if (sum === c) {
          result.push([-c, nums[a], nums[b]]);
          a++;
          while (nums[a] == nums[a - 1] && a < b) a++;
        } else if (sum > c) {
          b--;
        } else {
          a++;
        }
      }
    }
  }
  return result;
};

// Example 1:
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Example 2:
console.log(threeSum([0, 1, 1]));

// Example 3:
console.log(threeSum([0, 0, 0]));
