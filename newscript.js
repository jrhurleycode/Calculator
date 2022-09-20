const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let currentValue = "";
let previousValue = "";
let operator = "";
let operatorPressed = false;
let evaluatePermission = false;
let newValue = "";
let clear = document.querySelector(".clear");
let negPos = document.querySelector(".negPos");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector("#equals");
let mainDisplay = document.querySelector(".main");
let miniDisplay = document.querySelector(".mini");

let numbers = document.querySelectorAll(".operand");
let operators = document.querySelectorAll(".operator");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    pressNumber(e.target.textContent);
    console.log(currentValue);
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    pressOperator(e.target.textContent);
    console.log(operator);
  });
});

clear.addEventListener("click", (e) => {
  mainDisplay.textContent = "";
  miniDisplay.textContent = "";
  currentValue = "";
  previousValue = "";
  newValue = "";
  operator = "";
});

function pressNumber(number) {
  if (currentValue.length <= 8)
    mainDisplay.textContent = currentValue += number;

  if (operatorPressed == true) {
    mainDisplay.textContent = currentValue;
    miniDisplay.textContent = previousValue;
  }
}

function pressOperator(op) {
  operatorPressed = true;
  operator = op;
  mainDisplay.textContent = currentValue + " " + operator;

  if (evaluatePermission == true) {
    mainDisplay.textContent = operate(operator, previousValue, currentValue);
  }
  evaluatePermission == true;
}

function operate(op, a, b) {
  op = operator;
  a = Number(a);
  b = Number(b);

  if ((a == "") & (b == "")) {
    newValue = "try again";
  }
  if (op == "+") {
    newValue = add(a, b);
  }
  if (op == "-") {
    newValue = subtract(a, b);
  }
  if (op == "/") {
    newValue = divide(a, b);
  }
  if (op == "*") {
    newValue = multiply(a, b);
  }
  console.log(newValue);
  currentValue = newValue;
  return currentValue;
}
