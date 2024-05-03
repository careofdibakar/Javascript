const person1 = {
  userName: "Abdul Kalam",
  wing: "defense Research",
  achivements: {
    1: "NANDI",
    2: "AGNI",
    3: "PRITHIVI",
  },
};

// let { personName, wing, achivements } = person1;
// console.log(personName); //undefined

let { userName, wing, achivements } = person1;
console.log(userName); //Abdul

let { userName: personName, ...rest } = person1;
console.log(personName); // Abdul Kalam
console.log(rest); // { wing: 'defense Research', achivements: { '1': 'NANDI', '2': 'AGNI', '3': 'PRITHIVI' }  }
