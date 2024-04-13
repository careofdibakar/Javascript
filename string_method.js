const str = String("d")
const p = "d"

const result = str.match(p) ? str.match(p).index : "-1"
console.log(result);