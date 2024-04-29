// class Student {
//   constructor() {
//     var name;
//     var marks;
//   }

//   getName() {
//     return this.name;
//   }

//   setName(name) {
//     this.name = name;
//   }

//   getMarks() {
//     return this.marks;
//   }

//   setMarks(marks) {
//     this.marks = marks;
//   }
// }

// var stud = new Student();

// stud.setName("John");
// stud.setMarks(80);
// console.log(stud.getName() + " " + stud.getMarks());

var sum = 0;
function display(){
    console.log(sum);
    var sum = 100;
};
display();