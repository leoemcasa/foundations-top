
const add = (a, b) => a + b
console.log(add(2, 3));

const subtract = (a, b) => a - b
console.log(subtract(2, 3));

const sum = (array) => array.reduce((total, current) => total + current, 0);
console.log(sum([1,2,3,4]));

const multiply = (array) => array.reduce((total, current) => total * current, 1);
console.log(multiply([1,2,3,4]));

const power = (a, b) => a ** b;
console.log(power(2, 3));

const factorial = function(a) {
  if (a === 0) return 1;
  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};
console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
