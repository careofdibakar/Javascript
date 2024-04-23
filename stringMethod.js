// charAt method
const myFavSeries = "Aavengers";
console.log(myFavSeries.charAt(0)); // M

// indexOf returns the index of the charecter in a particular array
console.log(myFavSeries.indexOf("A")); // 0
console.log(myFavSeries.indexOf("a")); // 1


// charCodeAt
console.log(myFavSeries.charCodeAt(0)); //65 Cause ASCII value of A=65
console.log(myFavSeries.charCodeAt(1)); //97 Cause ASCII value of 1=97

const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i in upperAlphabet) {
  // "in" works with string
  process.stdout.write(upperAlphabet.charCodeAt(i) + " ");
}
console.log();
for (let i in lowerAlphabet) {
  // "in" works with string
  process.stdout.write(lowerAlphabet.charCodeAt(i) + " ");
}
/**
 * Also do remember "String.fromCharCode(i)" method helps to convert a ASCII value to a charecter
 */
