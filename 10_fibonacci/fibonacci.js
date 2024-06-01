const fibonacci = function (x) {
  x = parseInt(x);
  if (x < 0) {
    return "OOPS";
  }
  let fib = 1;
  let prev = 0;
  if (x == 0) {
    return 0;
  }
  for (let i = 2; i <= x; i++) {
    const curr = fib;
    fib = prev + fib;
    prev = curr;
  }
  return fib;
};

// Do not edit below this line
module.exports = fibonacci;
