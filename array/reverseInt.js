function revrseInt(int) {
  var rev = int.toString().split("").reverse().join("");
  return parseInt(rev) * Math.sign();
}

console.log(revrseInt(12345));
