// 242. Valid Anagram
// solution:

// Easy solution
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let str1 = s.split("").sort().join("");
//   let str2 = t.split("").sort().join("");
//   if (str1 === str2) {
//     return true;
//   }
//   return false;
// };

// Best solution
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let frequency = {};
  for (let i = 0; i < s.length; i++) {
    if (frequency[s[i]]) {
      frequency[s[i]]++;
    } else {
      frequency[s[i]] = 1;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (frequency[t[i]] === undefined) {
      return false;
    } else {
      frequency[t[i]]--;
      if (frequency[t[i]] === 0) {
        delete frequency[t[i]];
      }
    }
  }
  if (Object.keys(frequency).length === 0) {
    return true;
  }
  return false;
};

// Example 1:
console.log(isAnagram("anagram", "nagaram"));

// Example 2:
console.log(isAnagram("rat", "car"));
