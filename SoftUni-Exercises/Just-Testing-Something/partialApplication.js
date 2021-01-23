// First example

// Main function
function add(x, y) {
    return x + y;
}
// Partial Application implementation
function partialAddWIthFive(x) {
    return add(x, 5);
}

const result = partialAddWIthFive(10);

console.log(result);

// Second example -----------------------------------

// Main function

let pow = (y, x) => x ** y;
console.log(pow(2, 5));

// Partial Application implementation

// Using Bind
let sqr = pow.bind(undefined, 2);

// Using Ordinary way
// let sqr = function(x){
//     return pow(x, 2);
// } 

console.log(sqr(5));

