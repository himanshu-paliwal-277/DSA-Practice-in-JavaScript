// 217. Contains Duplicate

var containsDuplicate = function (nums) {
  let frequency = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]] === undefined) {
      frequency[nums[i]] = 1;
    } 
    else {
      frequency[nums[i]]++;
      if (frequency[nums[i]] >= 2) {
        return true;
      }
    }
  }
  return false;
};

var containsDuplicate2 = function (nums) {
 let nums2 = new Set(nums);
 nums2 = [...nums2];
 if(nums.join("") == nums2.join("")){
    return false;
 }
 return true;
};

// Example 1:
console.log(containsDuplicate([1, 2, 3, 1]));

// Example 2:
console.log(containsDuplicate([1, 2, 3, 4]));

// Example 3:
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
