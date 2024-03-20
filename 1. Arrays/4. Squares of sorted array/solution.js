// 977. Squares of sorted array
// solution:

// Using simple for loop 
// var sortedSquares = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//   }
//   nums.sort((a, b) => a - b);
//   return nums;
// };

// Using 2 pointer technique
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let arr = new Array(nums.length);
  let index = arr.length - 1;
  while(left <= right){
    let Square_1 = nums[left]**2;
    let Square_2 = nums[right]**2;
    if(Square_1 > Square_2){
      arr[index] = Square_1;
      left++;
    }
    else {
      arr[index] = Square_2;
      right--;
    }
    index--;
  }
  return arr;
};



// Example 1:
console.log(sortedSquares([-4, -1, 0, 3, 10]));
// Example 2:
console.log(sortedSquares([-7, -3, 2, 3, 11]));
