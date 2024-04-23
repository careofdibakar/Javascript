/*
// charAt method
const myFavSeries = "Aavengers";
console.log(myFavSeries.charAt(0)); // M

// indexOf returns the index of the charecter in a particular array
console.log(myFavSeries.indexOf("A")); // 0
console.log(myFavSeries.indexOf("Ax")); // -1 cause it is unable to find "Ax" in "Aavengers"
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

// Also do remember "String.fromCharCode(i)" method helps to convert a ASCII value to a charecter
 
console.log();

// includes() return boolean value, a char or word is present in the string or not
const vowel = "aeiouAEIOU";
// const targetString = "A quick brown fox jumps over the lazy dog";
const targetString = "aeiouAEIOU";
for (let i in vowel) {
  let findingChar = vowel.charAt(i);
  let result =  targetString.includes(vowel.charAt(i)) == true ? "Present" : "False";
  process.stdout.write(`${findingChar} : ${result} || `);
}


// toUpperCase & toLowerCase
const str = "ghsdjgfvhsjk";
console.log("ghsdjgfvhsjk".toLocaleUpperCase().toLowerCase());
console.log(str.toUpperCase());

// substr
const myName = 'Dibakar'
console.log(myName.substring(0,1)); // D
console.log(myName.substring(0,7)); // Dibakar
console.log('Dibakar'.substring(0,6)); // Dibaka
console.log('Hello world'.substring(-3)); // Dibaka
*/
// trim
const myHero = '    Vivekananda    ';
console.log("      Dibakar      ".trim());
console.log(myHero.trimEnd());
console.log(myHero.trimStart());