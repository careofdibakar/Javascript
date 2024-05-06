const person1 = {
  name: "Abdul Kalam",
  wing: "defense Research",
  achivements: {
    1: "NANDI",
    2: "AGNI",
    3: "PRITHIVI",
  },
};

const person2 = JSON.parse(JSON.stringify(person1)); // THis is the method to create a deep copy of an object

person2.achivements[1] = "XYZ";

console.log(person1);
// {
//     name: 'Abdul Kalam',
//     wing: 'defense Research',
//     achivements: { '1': 'NANDI', '2': 'AGNI', '3': 'PRITHIVI' }
//   }
console.log(person2);

// {
//     name: 'Abdul Kalam',
//     wing: 'defense Research',
//     achivements: { '1': 'XYZ', '2': 'AGNI', '3': 'PRITHIVI' }
//   }
