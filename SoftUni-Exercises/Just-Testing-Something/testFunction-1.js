let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

function calculate(addNumbers, firstOperand, secondOperand) {
    return addNumbers(firstOperand, secondOperand);
}

let result = calculate(add, 4, 5);
let result2 = calculate(multiply, 4, 5);

console.log(result);
console.log(result2);

// One function can be returned as result by another function

function getOperation() {
    return function(a, b) {
        return a + b;
    }
}

let operation = getOperation();
console.log(operation(10, 90));