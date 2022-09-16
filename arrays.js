const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let currentValue = [];
let previousValue = [];
let operator = [];
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
      currentValue.push(e.target.textContent)
      console.log(currentValue)
    });
  });

operators.forEach((op) => {
      op.addEventListener("click", (e) => {
      operator.push(e.target.textContent);
      console.log(operator)
    });
  });

