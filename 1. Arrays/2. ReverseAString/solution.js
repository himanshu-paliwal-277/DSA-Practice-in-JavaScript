// 344. Reverse String
// solution:
function reverseString(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++;
    j--;
  }
  return s;
}

// Example 1:
console.log(reverseString(["h", "e", "l", "l", "o"]));
// Example 2:
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
