const person1 = {
  userName: "Abdul Kalam",
  wing: "defense Research",
  achivements: {
    1: "NANDI",
    2: "AGNI",
    3: "PRITHIVI",
  },
};

// console.log(Object.keys(person1)); // [ 'userName', 'wing', 'achivements' ]
// console.log(Object.values(person1));  // ['Abdul Kalam','defense Research',{ '1': 'NANDI', '2': 'AGNI', '3': 'PRITHIVI' }]
console.log(Object.entries(person1)); // returns array of array, mentioned below
/**
 * [
 *      [ 'userName', 'Abdul Kalam' ],
 *      [ 'wing', 'defense Research' ],
 *      [ 'achivements', { '1': 'NANDI', '2': 'AGNI', '3': 'PRITHIVI' } ]
 * ]
 */