function isAnagram(a, b) {
  // code here
  if (a.split("").sort().toString() == b.split("").sort().toString()) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("abc", "bac"));
