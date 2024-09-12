document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements
  const screen = document.querySelector(".screen");
  const buttons = document.querySelectorAll(".calculating-buttons button");

  let expression = "";
  let result = "";

  // Function to update screen
  function updateScreen() {
    screen.value = expression || result;
  }

  // Function to handle button clicks
  function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === "=") {
      // Calculate the result
      result = eval(expression);
      expression = "";
    } else if (buttonValue === "AC") {
      // Clear the expression and result
      expression = "";
      result = "";
    } else if (buttonValue === "DEL") {
      // Delete the last character
      expression = expression.slice(0, -1);
    } else if (buttonValue === "X^2") {
      // Square the current value
      expression = Math.pow(parseFloat(expression), 2);
    } else if (buttonValue === "%") {
      // Calculate the percentage
      expression = eval(expression) / 100;
    } else {
      // Append the button value to the expression
      if (result !== "") {
        expression = buttonValue;
        result = "";
      } else {
        expression += buttonValue;
      }
    }

    updateScreen();
  }

  // Adding event listeners to buttons
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
});
