/**
 *
 * @param {Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * Example arr = [1,5,9,3,7]
 * The minimum sum is 1+3+5+7 = 16  and the maximum sum is 3+5+7+9 = 24. The function prints---- [16 +"    " +24
 */
function miniMaxSum(arr) {
  // Write your code here
  let incriseOrderArr = [...arr];
  incriseOrderArr = incriseOrderArr.sort();

  let decreseOrderArr = [...incriseOrderArr];
  decreseOrderArr = decreseOrderArr.reverse();

  let incriseOrderArrLength = incriseOrderArr.length - 2;
  let decreseOrderArrLength = decreseOrderArr.length - 2;

  let minSum = 0;
  for (let i = 0; i <= incriseOrderArrLength; i++) {
    minSum += incriseOrderArr[i];
  }

  let maxSum = 0;
  for (let i = 0; i <= decreseOrderArrLength; i++) {
    maxSum += decreseOrderArr[i];
  }

  process.stdout.write(minSum + " " + maxSum);
}

miniMaxSum([1, 5, 9, 3, 7]);
