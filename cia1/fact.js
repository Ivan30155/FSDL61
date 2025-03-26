const readline = require("readline-sync");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateFactorial() {
    let num = readline.question("Enter a number: ");
    num = parseInt(num);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative integer.");
    } else {
        let result = factorial(num);
        console.log(`The factorial of ${num} is ${result}`);
    }
}

calculateFactorial();
