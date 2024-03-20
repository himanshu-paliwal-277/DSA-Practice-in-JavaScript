// 167. Two Sum II - Input Array Is Sorted
// solution:

function twoSum(nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    let sum = nums[i] + nums[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
}

// Example 1:
console.log(twoSum([2, 7, 11, 15], 9));
// Example 2:
console.log(twoSum([2, 3, 4], 6));
// Example 3:
console.log(twoSum([-1, 0], -1));
