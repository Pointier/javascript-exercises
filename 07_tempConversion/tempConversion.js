const convertToCelsius = function (tempF) {
  let tempC = ((tempF - 32) * 5) / 9;
  if (Number.isInteger(tempC)) return tempC;
  return parseFloat(tempC.toFixed(1));
};

const convertToFahrenheit = function (tempC) {
  let tempF = (tempC * 9) / 5 + 32;
  if (Number.isInteger(tempF)) return tempF;
  return parseFloat(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
