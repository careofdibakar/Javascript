const person1 = {
  name: "Abdul Kalam",
  wing: "defense Research",
  achivements: {
    1: "NANDI",
    2: "AGNI",
    3: "PRITHIVI",
  },
};

/**
 * If i create a cope from person1 and make necessary changes, then it also modify the person1,
 * Because both are referancing same memory location. But carefully look the next operaion
 * It will seems to be not a shallow copy, but in nested object it will not work.
 */

const person2 = Object.assign({}, person1); // New object created
person2.name = "Dibakar Das";
person2.wing = "Web Application Developer";
person2.achivements[1] = "Nothing";

console.log(person1);
// {
//     name: 'Abdul Kalam',
//     wing: 'defense Research',
//     achivements: { '1': 'Nothing', '2': 'AGNI', '3': 'PRITHIVI' } // Note Here 1st achivements also changed.
//   }
console.log(person2);
// {
//     name: 'Dibakar Das',
//     wing: 'Web Application Developer',
//     achivements: { '1': 'Nothing', '2': 'AGNI', '3': 'PRITHIVI' }
//   }
