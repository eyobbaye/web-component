const display = document.getElementById("display");
const trignometricKey = document.getElementById("trignometric-key-second");
let displayVisible = 0;

function hideShow() {
  if (displayVisible == 0) {
    trignometricKey.style.display = "none";
    displayVisible = 1;
  } else {
    trignometricKey.style.display = "grid";
    displayVisible = 0;
  }
}

function appendToDisplay(value) {
  display.value += value;
}

function calculate(value) {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function sin() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = Math.sin(value);
  } else {
    display.value = "Error";
  }
}
function tan() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = Math.tan(value);
  } else {
    display.value = "Error: Invalid value";
  }
}

function cos() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = Math.cos(value);
  } else {
    display.value = "Error: Invalid value";
  }
}

function logs() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = Math.log10(value);
  } else {
    display.value = "Error: Invalid value";
  }
}
function squareRoot() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = Math.sqrt(value);
  } else {
    display.value = "Error: Invalid square root value";
  }
}

function ln() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = Math.log(value);
  } else {
    display.value = "Error: Invalid";
  }
}

function appendToClear() {
  display.value = display.value.slice(0, -1);
}

function square() {
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = display.value * display.value;
  } else {
    display.value = "Error invalid";
  }
}
