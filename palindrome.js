function isPalindrome(S) {
  // write your code here
  const mainStr = S;
  const reverseStr = S.split("").reverse().toString().replace(/,/g, "");
  console.log(mainStr);
  console.log(reverseStr);

  if (mainStr == reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("acba"));
