const add = (a, b) => a + b;
console.log(add(5, 5));
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operator, numA, numB) => {
  return operator(numA, numB);
};
let operator = "";
let currentValue = "";
let previousValue = "";

//!. add event listners to buttons.   DOMContentLoaded = loads js after HTML but doesn't wait for stylesheets.

document.addEventListener("DOMContentLoaded", function () {
  let clear = document.querySelector(".clear");
  let negPos = document.querySelector(".negPos");
  let decimal = document.querySelector(".decimal");
  let equal = document.querySelector("#equals");
  let display = document.querySelector(".display");

  let numbers = document.querySelectorAll(".operand");
  let operators = document.querySelectorAll(".operator");

  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      currentValue = "";
      displayNumber(e.target.textContent);
      display.textContent = currentValue;
    });
  });

  operators.forEach((op) => {
    op.addEventListener("click", (e) => {
      displayOperator(e.target.textContent);
      display.textContent = previousValue + " " + operator;
    });
  });

  clear.addEventListener("click", (e) => {
    display.textContent = "";
    currentValue = "";
  });
});

//2. make numbers show on display

function displayNumber(num) {
  if (currentValue.length <= 9) {
    currentValue += num;
  }
}

function displayOperator(op) {
  operator = op;
  previousValue = currentValue;
}

//3. make numbers then operators on display
//4. make computation work
//5. limit numbers on display
//6. clear display
//7. continuous computation
//8. finished?
