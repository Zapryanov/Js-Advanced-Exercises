// This is a good practical solution, not for the Judge system in SoftUni

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function devide(x, y) {
    return x / y;
}

function modularity(x, y) {
    return x % y;
}

function exponentiation(x, y) {
    return x ** y;
}

const obj = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": devide,
    "%": modularity,
    "**": exponentiation
}

function mathOperations(sign, ...params) {
    return params.reduce((acc, cur) => obj[sign](acc, Number(cur)), Number(params.shift()))
}

console.log(mathOperations("+", 3, 5.5));
console.log(mathOperations("-", 3, 5.5));
console.log(mathOperations("*", 3, 5.5));
console.log(mathOperations("/", 3, 5.5));
console.log(mathOperations("%", 12, 10));
console.log(mathOperations("**", 3, 5));