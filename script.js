const add = (a, b) => a + b;
console.log(add(5, 5));
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, numA, numB) => {
  return operator(numA, numB);
};
