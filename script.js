const display = document.querySelector('.display');
displayText = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(func, a, b) {
    return func(a, b);
}

function updateDisplay(a) {
    displayText += a.textContent;
    console.log(a.textContent);
}

var updateTimer = setInterval(function() {
    display.textContent = displayText;
}, 100)