// 1. Two Sum
// solution:
function twoSum(nums, target) {
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// Example 1:
console.log(twoSum([2, 7, 11, 15], 9));
// Example 2:
console.log(twoSum([3, 2, 4], 6));
// Example 3:
console.log(twoSum([3, 3], 6));
