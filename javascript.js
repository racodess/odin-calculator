let display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

const calculator = {
  a: null,
  b: null,
  result: null,
  recent: null,
  operator: null,
  concatenate: true,
  operate() {
    switch (this.operator) {
      case "float":
        this.result = this[this.operator](this.recent);
        return this.result;
      case "negate":
        this.result = this[this.operator](this.recent);
        return this.result;
      default:
        this.result = this[this.operator](this.a, this.b);
        this.setResult();
        return this.result;
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
  equal(){
    if (this.recent)
      return this.recent;
    else
      return 0;
  },
  clear() {
    this.a = null;
    this.b = null;
    this.result = null;
    this.recent = null;
    this.operator = null;
    this.concatenate = true;
    display.textContent = 0;
  },
  setResult() {
    this.a = this.result;
    this.b = null;
  },
};

calculator.clear();
buttons.forEach(handleButton);

function handleButton(button) {
  button.addEventListener("click", (event) => {
    const target = event.target;

    if (target.className === "digit" || target.id === "point")
        setDisplayValue(target.textContent);
    else {
      if (target.id === "clear"){
        calculator.clear();

        return;
      } 
      else if (target.id === "float" || target.id === "negate"){
        const temp = calculator.operator;
        calculator.operator = target.id;

        calculator.recent = display.textContent;
        calculator.concatenate = false;
        setDisplayValue(calculator.operate(), false);
        setOperand();
        calculator.operator = temp;
      }
      else if (!calculator.operator) { 
        setOperand();
        calculator.operator = target.id;
      }
      else if (target.id != calculator.operator) {
        setOperand();
        setDisplayValue(calculator.operate(), false);
        calculator.operator = target.id;
      }
      else {
        setOperand();
        setDisplayValue(calculator.operate(), false);
      }
    }
  });
}

function setOperand() {

  if (typeof calculator.a !== "number") {
    calculator.a = Number(getDisplayValue());
    calculator.recent = calculator.a;
  } 
  else {
    calculator.b = Number(getDisplayValue());
    calculator.recent = calculator.b;
  }

  return;
}

function setDisplayValue(value, concatenate) {
  const current = display.textContent;

  if (current.length == 12) 
    return;
  else if (value == "." && current.includes(".")){
      return;
    }
  else if (!calculator.concatenate || current == 0 || isNaN(current))
    display.textContent = Number(String(value).slice(0, 11));
  else if (calculator.concatenate) 
    display.textContent += value;

  if(concatenate === false) 
    calculator.concatenate = false;
  else
    calculator.concatenate = true;
}

function getDisplayValue() {
  calculator.concatenate = false;

  return display.textContent;
}
