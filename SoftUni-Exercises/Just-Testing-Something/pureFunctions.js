// Pure Function
const pureFunction = (n) => n + 1;

console.log(pureFunction(1));
console.log(pureFunction(1));
console.log(pureFunction(1));
let number = 0;

console.log("------------------------");

// Impure Function-1
const notPureFunction = () => number += 1;

console.log(notPureFunction());
console.log(notPureFunction());
console.log(notPureFunction());

// Impure Function-2

let impureFunction = (text) => {
    return new Date().getFullYear() + " " + text;
}

console.log(impureFunction("year."))