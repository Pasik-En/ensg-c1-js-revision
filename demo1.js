/* 
-  A user enters a number
- The number is received
- The mutiplyBy5 button is clicked
- Then the number is multiplied by 5
- The UI reflects the new multiplied number
- The output button when clicked clears the output element
*/

const inputElement = document.getElementById("number-input");
const multiplyButton = document.querySelector("#multiply-btn");
const clearButton = document.querySelector("#clear-btn");
const outputElement = document.getElementById("output");

// let value = 0;

function getUserInput() {
    return Number(inputElement.value);
}


function multiply(userInput) {
    return userInput * 5;
}

function displayOutput(result) {
    outputElement.textContent = result;
}

function clearInput() {
    inputElement.value = "";
}

function handleClearOutput() {
    outputElement.textContent = "";
}

function handleMultiply() {
    const userInput = getUserInput();
    const multiplyResult = multiply(userInput);
    displayOutput(multiplyResult);
    clearInput();
}

multiplyButton.addEventListener("click", handleMultiply);
clearButton.addEventListener("click", handleClearOutput);