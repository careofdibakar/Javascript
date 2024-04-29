// var arr = [2, 4, 6, 8, 10];

// var value = Math.max.apply(null, arr);

// console.log(value);
// var a = 1;
// function b() {
// 	a = 10;  return;
//   	function a() {}
// }
// b();
// console.log(a);

var x = 5;
console.log(x);
setTimeout(() => {
  x++;
  console.log(x);
}, 5000);
setTimeout(() => {
  x = 0;
}, 5000);
console.log(x);
