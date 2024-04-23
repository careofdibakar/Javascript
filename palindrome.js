function isPalindrome(str) {
  // write your code here
  const mainStr = str;
  const reverseStr = str.split("").reverse().toString().replace(/,/g, "");
  console.log(mainStr);
  console.log(reverseStr);

  if (mainStr == reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("acba"));
