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
 * Here is no key named age inside 'achivements' object. so if we run underwritten code it wil throw undefined
 */
console.log(person1.achivements.age); //undefined
/**
 * Now if we want to access [person1.abcd.age] it will throw error. Why ?
 * Because firstly JS compiler will try to find person1.abcd but 'abcd' is not a propety of person1 obj.
 * thats why it will throw error
 */
console.log(person1.abcd.age); // Cannot read properties of undefined
/**
 * To handle this in runtime, we use optional chaining. [person1.abcd?.age]
 * Js compiler first check abcd exist or not. if not it will throw undefined
 */
console.log(person1.abcd?.age); // undefined
