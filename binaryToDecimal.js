let binaryToDecimal = (str) => {
  return parseInt(str, 2);
};
let decimalToBinary = (str) => {
  return (str >>> 0).toString(2);
};

// console.log(binaryToDecimal(10001000));
console.log(decimalToBinary(7));
