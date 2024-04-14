let a = "b";
let b = "d";
let aValue = 0
let bValue = 0
for (let i = 0; i < a.length; i++) {
  aValue = a.charCodeAt(i) + aValue;
}

for (let j = 0; j < b.length; j++) {
  bValue = b.charCodeAt(j) + bValue;
}

if(aValue == bValue){
    // return "YES"
    console.log("YES");
}else{
    // return "NO"
    console.log("NO");
}

console.log(aValue);
console.log(bValue);
