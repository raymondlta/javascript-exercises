const convertToCelsius = function(faren_val) {
  return Math.round((faren_val - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(cel_val) {
  return Math.round(((cel_val * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
