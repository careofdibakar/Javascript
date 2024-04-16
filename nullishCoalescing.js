/**
 * Nullish coalescing is an operator 
 * It was introduced ECMA proposal
 * It basically returns another value if first variable is falsy
 */

console.log(0 ?? "Dibakar"); // 0
console.log("" ?? "Dibakar"); // blank
console.log(null ?? "Dibakar"); // Dibakar
console.log(undefined ?? "Dibakar"); // Dibakar