/**
 * There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
 * Example
 * string = ['ab', 'ab', 'abc']
 * query = ['ab', 'abc', 'bc']
 * There are  2 instances of 'ab' ,1  of 'abc' and 0 of 'bc'. For each query, add an element to the return array, .
 */

function matchingStrings(strings, queries) {
  let occurance = new Array();
  for (let item of queries) {
    occurance[item] = strings.filter((x) => x === item).length;
  }

  return occurance;
}

console.log(matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]));
