let a = null;
let b = null;
let concatenate = false;

let display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

clear();
buttons.forEach(handleButton);

function add(a, b) {
  return a + b;
}

function subtract(oprand1, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function getPercent(a) {
  return a / 100;
}

function invertSign(a) {
  return ~a + 1;
}

function clear() {
  a = null;
  b = null;
  operator = null;
  concatenate = false;
  display.textContent = 0;
}

function operate(operator) {
  concatenate = false;

  switch (operator) {
    case "plus":
      break;
    case "minus":
      break;
    case "multiply":
      break;
    case "divide":
      break;
    case "percent":
      break;
    case "sign":
      break;
    case "equal":
      break;
    case "clear":
      clear();
      break;
  }
}

function handleButton(button) {
  button.addEventListener("click", (event) => {
    const target = event.target;

    if (target.className === "digit") {
      const digit = Number(target.textContent);

      setDisplayValue(digit);
    } else {
      const operator = target.id;

      setOperator(operator);
    }
  });
}

function setDisplayValue(digit) {
  const current = display.textContent;

  if (current.length == 12);
  else if (!concatenate || current == 0) {
    display.textContent = digit;
    concatenate = true;
  } else if (concatenate) display.textContent += digit;
  else {
    display.textContent = digit;
  }
}

function getDisplayValue() {
  return display.textContent;
}
