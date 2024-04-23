function isPanagram(str) {
  //code here
  const allAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = false;
  for (let i in allAlphabet) {
    result = str.includes(allAlphabet.charAt(i)) || str.includes(allAlphabet.charAt(i).toUpperCase());
    
    if (result == false) {
      break;
    }
  }

  return result;
}

console.log(isPanagram("OqgPmuVccvfWDxHGSbqYtTPrpZJlrNSyhSmZVudpTvXZXIZlYGbEHKybgaVJuZvYYSxVvUtbaJladMtvNWsTdDiCgqkDfE"));
