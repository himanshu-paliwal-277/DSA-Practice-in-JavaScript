// 75. Sort Colors

var sortColors = function (nums) {
  //   nums.sort((a,b) => a-b);
  let n = nums.length - 1;
  for (let i = 0; i <= n; i++) {
    let p = 0;
    while (p !== n - i) {
      if (nums[p] > nums[p + 1]) {
        let temp = nums[p];
        nums[p] = nums[p + 1];
        nums[p + 1] = temp;
      }
      p++;
    }
  }
  return nums;
};

// Example 1:
console.log(sortColors([2, 0, 2, 1, 1, 0]));

// Example 2:
console.log(sortColors([2, 0, 1]));
