let arraySortedOrNot = (arr) => {
  let sortedArr = [...arr];
  sortedArr = sortedArr.sort((a, b) => {
    return a - b;
  });

  console.log(JSON.stringify(arr));
  console.log(JSON.stringify(sortedArr));
  if (JSON.stringify(arr) === JSON.stringify(sortedArr)) {
    return true;
  } else {
    return false;
  }
};

console.log(arraySortedOrNot([10, 20, 30, 40, 50]));
