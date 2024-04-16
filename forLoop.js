// let myName = "Dibakar Das";
// for (let i = 0; i < myName.length; i++) {
//   if (myName[i] == " ") {
//     continue;
//   }
//   console.log(myName[i]);
// }

/**
 * Nested forloop
 * 0
 * 00
 * 000
 * 0000
 * 00000
 */

for (let i = 0; i < 5; i++) {
  let single_line_pattern = '';
  for (let j = 0; j <= i; j++) {
    single_line_pattern += "0";
  }
  console.log(single_line_pattern);
}
