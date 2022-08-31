const display = document.querySelector('.display');
displayText = '';
decimalPresent = false;
operator = false;

functions = ['+', '-', 'x', '/']

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

function operate(a, func, b) {
    displayText = func(a, b);
}

function updateDisplay(a) {
    if (functions.includes(a.textContent)) {
        decimalPresent = false;
        displayText += a.textContent;
    }
    else if (a.textContent == '.') {
        if (!decimalPresent) {
            displayText += a.textContent;
            decimalPresent = true;
        }
    }
    else {
        displayText += a.textContent;
    }
}

function clearDisplay() {
    displayText = '';
}

var updateTimer = setInterval(function() {
    display.textContent = displayText;
}, 100)