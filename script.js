const display = document.querySelector('.display');
displayText = '';
decimalPresent = false;
operator = false;

functions = ['+', '-', 'x', '/']
functionConverter = {
    '+': add,
    '-': subtract,
    'x': multiply,
    '/': divide
}

function add(a, b) {
    return +a + +b;
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
    return func(a, b);
}

function updateDisplay(a) {
    console.log('trying');
    if (functions.includes(a.textContent)) {
        decimalPresent = false;
        evaluateEquation();
        displayText += a.textContent
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

function evaluateEquation() {
    let seperator = '';
    for (const piece of displayText) {
        if (functions.includes(piece)) {
            seperator = piece;
        }
    }
    if (seperator) {
        parts = displayText.split(seperator);
        if (parts[1] && parts[0]) {
            answer = operate(parts[0], functionConverter[seperator], parts[1]);
            displayText = answer;
        }
    }
}

function deleteDisplay() {
    displayText = displayText.slice(0, -1);
}

function clearDisplay() {
    displayText = '';
    decimalPresent = false;
}

var updateTimer = setInterval(function() {
    display.textContent = displayText;
}, 100)