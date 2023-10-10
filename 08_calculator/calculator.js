const add = function(a,b) {
    return a + b
	
};

const subtract = function(a,b) {
  return a - b
	
};

const sum = function(arr) {

  return arr.reduce((a,b) => a+b , 0);
	
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b)
};

const power = function(a,b) {
  return Math.pow(a,b)
};

const factorial = function(n) {
  // A factorial is the product of all positive integers less than or equal to n. 
  // 0! === 1

  if (n === 0 ) {
    return 1
  }

  arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  return arr.reduce((a,b) => a * b);

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
