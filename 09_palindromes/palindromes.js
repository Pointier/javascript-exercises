const palindromes = function(str) {
  str = str.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  let half = Math.floor(str.length / 2);
  let firstHalf = str.slice(0, half);
  str = str.split("").reverse().join("");
  let secondHalf = str.slice(0, half);
  return firstHalf === secondHalf;
};
// Do not edit below this line
module.exports = palindromes;
