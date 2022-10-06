const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const resetCurrentValue = () => (currentValue = "");

let defaultValue = "0";
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
let backspaceBtn = document.querySelector(".backspace");

let numbers = document.querySelectorAll(".operand");
let operators = document.querySelectorAll(".operator");

mainDisplay.textContent = defaultValue;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    setDefaultValue();
    pressNumber(e.target.textContent);
    decimalLimit();
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    pressOperator(e.target.textContent);
  });
});

negPos.addEventListener("click", (e) => {
  negPosConvert(e);
});

backspaceBtn.addEventListener("click", (e) => {
  setDefaultValue();
  backspace(e);
});

clear.addEventListener("click", (e) => {
  mainDisplay.textContent = "0";
  miniDisplay.textContent = "";
  currentValue = "";
  previousValue = "";
  newValue = "";
  operator = "";
  operatorPressed = false;
  evaluatePermission = false;
});

equals.addEventListener("click", (e) => {
  operate(operator, previousValue, currentValue);
  miniDisplay.textContent = "";
  mainDisplay.textContent = currentValue;
  operator = "";
});

function setDefaultValue() {
  if (currentValue.length == 0) {
    defaultValue = "0";
    mainDisplay.textContent = defaultValue;
  }

  if (!currentValue.length == 0) {
    defaultValue = null;
  }
}

function pressNumber(number) {
  if (currentValue.length <= 12)
    mainDisplay.textContent = currentValue += number;

  if (operatorPressed == true) {
    miniDisplay.textContent = previousValue + " " + operator;
    mainDisplay.textContent = currentValue;
  }
}

function pressOperator(op) {
  if (evaluatePermission == true) {
    operate(operator, previousValue, currentValue);
    miniDisplay.textContent = newValue;
  }

  operatorPressed = true;
  operator = op;
  mainDisplay.textContent = currentValue + " " + operator;

  evaluatePermission = true;
  previousValue = currentValue;
  resetCurrentValue();
}

function backspace() {
  let temp = currentValue.slice(0, -1);
  currentValue = temp;
  mainDisplay.textContent = currentValue;

  setDefaultValue();
}

function negPosConvert() {
  //if number is negative, make positive
  if (currentValue.startsWith("-") == true) {
    let temp = Math.abs(currentValue).toString();

    currentValue = temp;
  } else if (currentValue.startsWith("-") == false) {
    //if number is positive, make negative
    let str1 = "-";
    let str2 = "";
    str2 = str1.concat(currentValue);
    currentValue = str2;
  }
  mainDisplay.textContent = currentValue;
  console.log(currentValue);
  return currentValue;
}

function decimalLimit() {
  if (currentValue.includes(".")) {
    document.querySelector("#decimal").disabled = true;
  }
  if (!currentValue.includes(".")) {
    document.querySelector("#decimal").disabled = false;
  }
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
    if (divide(a, 0)) {
      newValue = "NOOO NOT INFINITY";
    } else {
      newValue = divide(a, b);
    }
  }
  if (op == "x") {
    newValue = multiply(a, b);
  }
  console.log(newValue);
  currentValue = newValue.toString();
}
