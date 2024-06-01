const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((previous, current) => previous + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((previous, current) => previous * current, 1);
};

const power = function (val, pow) {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result = result * val;
  }
  return result;
};

const factorial = function (fact) {
  let result = 1;

  for (let i = fact; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
