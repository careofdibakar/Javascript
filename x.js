const readline_sync = require("readline-sync");


function getLine() {
  // write your code here
  let msg = readline_sync.question("Enter message: ");
  return msg;
}

console.log(getLine());
