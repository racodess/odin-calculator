let operand1 = 0;
let operand2 = 0;
let operator = "";
let result = 0;
let displayValue = 0;

let displayTop = document.querySelector("#display-top");
let displayLower = document.querySelector("#display");

clear();

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(oprand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  return operand1 / operand2;
}

function percent(operand1) {
  return operand1 / 100;
}

function invertSign(operand1) {
  return ~operand1 + 1;
}

function clear() {
  operand1 = 0;
  operand2 = 0;
  operator = "";
  result = 0;
  displayValue = 0;

  displayTop.textContent = "";
  displayLower.textContent = 0;
}

function clearEntry() {
  displayLower.textContent = 0;
}

function operate(operand1, operand2, operator) {
  switch (operator) {
    case "":
      add(operand1, operand2);
      break;
    case "":
      subtract(operand1, operand2);
      break;
    case "":
      multiply(operand1, operand2);
      break;
    case "":
      divide(operand1, operand2);
      break;
    case "":
      percent(operand1);
      break;
    case "":
      invertSign(operand1);
      break;
  }
}
