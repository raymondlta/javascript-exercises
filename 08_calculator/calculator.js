const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, nextVal) => sum + nextVal, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, nextVal) => sum * nextVal, 1);
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	let total = 1;

  for (let i = 1; i < num;) {
    total *= ++i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
