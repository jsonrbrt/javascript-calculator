// ===================================================================
// DO NOT MODIFY THE CODE BELOW - Call or reference them in your code as needed
// ===================================================================

// Takes in a number and updates the readonly display input
function setDisplay(value) {
  const display = document.getElementById("display");
  display.value = String(parseFloat(value));
}

// Gets the value from the readonly display input
// Returns a number
// Doesn't need to be used but can help you verify
// the current value on the display
function getDisplay() {
  const display = document.getElementById("display");
  // parseFloat changes the string into a number we can use
  return display.value;
}

//Set up display to show zero when starting
setDisplay(0);

console.log("Initial value of display: ", getDisplay());

// ===================================================================
// DO NOT MODIFY THE CODE Above - Call or reference them in your code as needed
// ===================================================================

/**
 * Main input handler called from HTML buttons
 * This function receives ALL button clicks and routes them to the appropriate handler
 * @param {string} input - The input value from button clicks
 *
 * HINT: This function should:
 * 1. Check if input is a number (0-9) and handle number input
 * 2. Check if input is an operator (+, -, *, /) and handle operator input
 * 3. Check if input is a decimal point (.) and handle decimal input( )
 * 4. Check if input is equals (=) and execute the operation
 * 5. Check if input is clear (C) and reset the calculator
 * 6. Don't forget to call setDisplay() at the end to refresh the screen!
 */

let firstOperand = null;
let secondOperand = null;
let currentValue = "0"; // Default state for the calculator
let storedOperator = "";
let waitingForSecondOperand = false;

function handleInput(input) {
  console.log(`Button clicked: ${input}`);
  if (input === "C") {
    resetCalculator(input);
  } else if (input = "CE") {
    handleClearEntry(input);
  } else if (input === "+" || input === "-" || input === "*" || input === "/") {
    handleOperator(input);
  } else if (input === ".") {
    handleDecimal(input);
  } else if (input === "=") {
    executeOperation(input);
  } else if (!isNaN(Number(input))) {
    handleNumber(input);
  }
  setDisplay(currentValue);
}

// TODO: Create your arithmetic operation functions here
// You will need: add, subtract, multiply, and divide functions
// Each should take two parameters (first, second) and return the result
// Don't forget to add console.log statements for debugging!
// Remember: division should check for division by zero and return "Error"

function arithmeticOperation(first, second, operator) {
  if (operator === "+") {
    return (result = first + second);
  } else if (operator === "-") {
    return (result = first - second);
  } else if (operator === "*") {
    return (result = first * second);
  } else if (operator === "/" && second === "0") {
    return "Error.";
  } else if (operator === "/") {
    return (result = first / second);
  }
}

/**
 * Handles number input (0-9)
 * @param {string} number - The number that was clicked
 */


function handleNumber(input) {
  if (waitingForSecondOperand === true) {
    currentValue = input;
    waitingForSecondOperand = false;
  } else if (currentValue === "0") {
    currentValue = input;
  } else {
    currentValue += input;
  }
  // Your code here
  // This function should update the display with setDisplay
  // for example, if we have the number 9 already and are adding another 9
  // Consider: Are we starting fresh? Continuing a number?
}

/**
 * Handles decimal point input - This is an Optional Stretch
 */
function handleDecimal() {
  if (currentValue.includes(".")) {
    return;
  } else {
    currentValue += ".";
  }
  // Your code here
  // Make sure you don't add multiple decimal points to one number
}

/**
 * Handles operator input (+, -, *, /)
 * @param {string} nextOperator - The operator that was clicked
 */


function handleOperator(nextOperator) {
  const currentInputValue = parseFloat(getDisplay());
  if (storedOperator && !waitingForSecondOperand) {
    executeOperation();
    firstOperand = parseFloat(currentValue);
  } else {
    firstOperand = currentInputValue;
  }
  storedOperator = nextOperator;
  waitingForSecondOperand = true;
  // Your code here
  // Store the operator
  // Store the first number
  // Prepare for the second number input
}

/**
 * Execute operatioon function: executes the calculation when = is pressed
 */

function executeOperation() {
  const secondOperand = parseFloat(getDisplay());
  if (storedOperator) {
    const result = arithmeticOperation(
      firstOperand,
      secondOperand,
      storedOperator
    );
    setDisplay(result);
    currentValue = String(result);
    firstOperand = result;
    storedOperator = "";
    waitingForSecondOperand = false;
  }
}

/**
 * Resets the calculator (C button)
 */

/* This function will run when user hit the 'C' button:
It will reset eveything (currentValue, operators, first and second operands, and the display)
*/
function resetCalculator() {
  currentValue = "0";
  storedOperator = "";
  firstOperand = null;
  secondOperand = null;
  waitingForSecondOperand = false;
  setDisplay("0");
}

/* Resets the current entry (CE button)
This function will only clear the last entry
if a user wants to calculate 19 * 7 but on the last input hits '8', hitting the 'CE' button will clear '8'
but keep '19' and '*'
*/
function handleClearEntry() {
  currentValue = "0";
  setDisplay(currentValue);
}