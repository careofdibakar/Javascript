/**
 * Given two strings which are of lengths n and n+1.
 * The second string contains all the character of the first string, but there is one extra character.
 * Your task to find the extra character in the second string.
 *  */

const extraChar = (s1, s2) => {
  // write your code here
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");
  let charCount = {};
  for (let char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of s2) {
    charCount[char] = (charCount[char] || 0) - 1;
  }

  let exChar = "";
  for (let char in charCount) {
    if (charCount[char] < 0) {
      exChar += char + " ";
    }
  }

  return exChar;
};

console.log(extraChar("abcd", "abcdd"));
