// let userData = {
//   name: "Dibakar Das",
//   age: 29,
//   "Job Title": "Web Developer",
// };

// process.stdout.write(userData["Job Title"]);

// console.log(userData.'Job Title');

const obj = {
  name: "John",
  sayHello: function () {
    console.log("Hello, my name is", this.name); //Hello, my name is John
  },
};

obj.sayHello();

obj.greet = () => {
  console.log(`How ary you ${this.name}`); //How ary you undefined
};
obj.greet();