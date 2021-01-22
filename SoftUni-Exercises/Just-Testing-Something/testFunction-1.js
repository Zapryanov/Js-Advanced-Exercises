function add(a, b) {
    return a + b;
}

function calculate(addNumbers, firstOperand, secondOperand) {
    return addNumbers(firstOperand, secondOperand);
}

let result = calculate(add, 4, 5);

console.log(result);