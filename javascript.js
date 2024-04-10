let concatenate = false;

let display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const calculator = {
  a: null,
  b: null,
  recent: null,
  operator: null,
  operate() {
    switch (this.operator) {
      case "add":
        this[this.operator](this.a, this.b);
        break;
      case "subtract":
        this[this.operator](this.a, this.b);
        break;
      case "multiply":
        this[this.operator](this.a, this.b);
        break;
      case "divide":
        this[this.operator](this.a, this.b);
        break;
      case "float":
        this[this.operator](this.a);
        break;
      case "negate":
        this[this.operator](this.a);
        break;
    }
  },
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
  float(a) {
    return a / 100;
  },
  negate(a) {
    return a * -1;
  },
  clear() {
    a = null;
    b = null;
    operator = null;
    concatenate = false;
    display.textContent = 0;
  },
};

calculator.clear();
buttons.forEach(handleButton);

function handleButton(button) {
  button.addEventListener("click", (event) => {
    const target = event.target;

    if (target.className === "digit") {
      const digit = Number(target.textContent);

      setDisplayValue(digit);
    } else {
      calculator.operator = target.id;

      if (
        typeof calculator.a === "number" &&
        typeof calculator.b === "number"
      ) {
        const test = calculator.operate();
        console.log(test);

        concatenate = false;
      } else if (typeof calculator.a !== "number") {
        calculator.a = Number(getDisplayValue());
        concatenate = false;
        console.log("a = " + calculator.a);
      } else {
        calculator.b = Number(getDisplayValue());
        calculator.operate();
        console.log("b = " + calculator.b);
      }
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
