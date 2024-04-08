let operand1 = 0;
let operand2 = 0;
let operator = "";
let result = 0;

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

function operate(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      add(operand1, operand2);
      break;
    case "-":
      subtract(operand1, operand2);
      break;
    case "-":
      multiply(operand1, operand2);
      break;
    case "-":
      divide(operand1, operand2);
      break;
  }
}

function clear() {
  operand1 = 0;
  operand2 = 0;
  operator = "";
}
