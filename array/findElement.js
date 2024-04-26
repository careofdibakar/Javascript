let search = (arr, N, X) => {
  // write your code here
  for (let i = 0; i <= N; i++) {
    if (arr[i] == X) {
      return i;
    }
  }
  return -1;
};

console.log(search([1, 2, 3], 4, 3));
