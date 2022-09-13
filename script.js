const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let operator = "";
let currentValue = "";
let previousValue = "";
let newValue = "";

//add event listners to buttons.   DOMContentLoaded = loads js after HTML but doesn't wait for stylesheets.

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

  equal.addEventListener("click", (e) => {
    operate(operator, previousValue, currentValue);
    display.textContent = newValue;
    if ((newValue = 8008135)) {
      display.textContent = "( @ Y @ )";
    }
  });

  clear.addEventListener("click", (e) => {
    display.textContent = "";
    currentValue = "";
    previousValue = "";
    newValue = "";
    operator = "";
  });
});

//make numbers show on display.   limit numbers on display

function displayNumber(num) {
  if (currentValue.length <= 9) {
    currentValue += num;
  }
  console.log("prev num is " + previousValue);
  console.log("current num is " + currentValue);
}

//make numbers then operators on display
function displayOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
  console.log("operator is " + operator);
}

//make computation work
function operate(op, a, b) {
  op = operator;
  a = Number(previousValue);
  b = Number(currentValue);

  console.log("previous value is " + a);
  console.log("current value is " + b);

  if ((a == "") & (b == "")) {
    newValue = "try again";
    return newValue;
  }
  if (op == "+") {
    newValue = add(a, b);
    return newValue;
  }
  if (op == "-") {
    newValue = subtract(a, b);
    return newValue;
  }
  if (op == "/") {
    newValue = divide(a, b);
    return newValue;
  }
  if (op == "*") {
    newValue = multiply(a, b);
    return newValue;
  }
  previousValue = newValue;
}

//continuous computation

//decimals

//negative positive
