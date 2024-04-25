/*
let myName = "Dibakar Das";
// String to array conversion
let myNameArr = myName.split(""); // ['D', 'i', 'b', 'a', 'k', 'a', 'r', ' ', 'D', 'a', 's']

// Access array item
console.log(myNameArr[0]); // D


// For let in
for (let i in myNameArr){
    process.stdout.write(i); // 012345678910 Only returns index
}
console.log();

// For let of
for (let i of myNameArr){
    process.stdout.write(i); // Dibakar Das Only returns value
}

//push item
let userDetails = ["Dibakar Das", "Software Developer", 678000];
let arrItemCount = userDetails.push("Kolkata", {
  interest_1: "Cyber Security",
  interest_2: "HLSD",
}); // You can add single OR multiple items AND any data
console.log(arrItemCount); // 5    Returns item present in an array
console.log(userDetails); // [ 'Dibakar Das', 'Software Developer', 678000, 'Kolkata', { interest_1: 'Cyber Security', interest_2: 'HLSD' }]

//pop item
let popItem = userDetails.pop();
console.log(popItem); // Returns poped item, in this case { interest_1: 'Cyber Security', interest_2: 'HLSD' }
console.log(userDetails); // [ 'Dibakar Das', 'Software Developer', 678000, 'Kolkata' ]

// Slice
let userArr = [
  "Dibakar Das",
  "Software Developer",
  678000,
  "Kolkata",
  { interest_1: "Cyber Security", interest_2: "HLSD" },
];
let slieItem = userArr.slice(0, 1); // slice(0 => Starting Index, 1 => closing Index) Returns new array with slice value
console.log(slieItem); // [ 'Dibakar Das' ]
console.log(userArr); // [ 'Software Developer', 678000, 'Kolkata', { interest_1: 'Cyber Security', interest_2: 'HLSD' }]
*/

// Splice
let marks = [99, 98, 78, 56, 89]
console.log(marks.splice(0, 2)); // splice(0 => Start item, 2 => How many item to be deleted) //[ 99, 98 ]
console.log(marks); // [ 78, 56, 89 ]

