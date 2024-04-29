var tensquared = (function (y) {
  return y * y * y;
})(99);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

const alteredNumbers = numbers
  .filter((num) => num % 2 === 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(alteredNumbers);
