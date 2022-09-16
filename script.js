const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let currentValue = "";
let previousValue = "";
let operator = "";
let newValue = "";

//add event listners to buttons.   DOMContentLoaded = loads js after HTML but doesn't wait for stylesheets.

document.addEventListener("DOMContentLoaded", function () {
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
      displayNumber(e.target.textContent);
      mainDisplay.textContent = currentValue;
      miniDisplay.textContent = previousValue + "" + operator;
    });
  });

  operators.forEach((op) => {
    op.addEventListener("click", (e) => {
      displayOperator(e.target.textContent);
      mainDisplay.textContent = previousValue + " " + operator;
    });
  });

  equal.addEventListener("click", (e) => {
    operate(operator, previousValue, currentValue);
    mainDisplay.textContent = newValue;
  });

  clear.addEventListener("click", (e) => {
    mainDisplay.textContent = "";
    miniDisplay.textContent = "";
    currentValue = "";
    previousValue = "";
    newValue = "";
    operator = "";
  });
});

//make numbers show on display.   limit numbers on display

function displayNumber(num) {
  //removes previous number
  if (operator == true) {
    currentValue = "";
  }

  if (currentValue.length <= 9) {
    currentValue += num;
  }
}

//make numbers then operators on display
function displayOperator(op) {
  operator = op;
  if (newValue == false) {
    previousValue = currentValue;
  } else {
    previousValue = currentValue;
    operate(op, previousValue, currentValue);
  }
  currentValue = "";
}

//make computation work
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
}

//continuous computation

//decimals

//negative positive
