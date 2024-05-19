const sumAll = function(firstInt, secondInt) {
  if (
    typeof firstInt != "number" ||
    typeof secondInt != "number" ||
    firstInt < 0 ||
    secondInt < 0
  ) {
    return "ERROR";
  }
  let lower;
  let greater;
  if (firstInt > secondInt) {
    lower = secondInt;
    greater = firstInt;
  } else {
    lower = firstInt;
    greater = secondInt;
  }
  sum = 0;
  for (lower; lower <= greater; lower++) {
    sum += lower;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
