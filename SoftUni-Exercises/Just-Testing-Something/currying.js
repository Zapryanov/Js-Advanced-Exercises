// Ordinary function
let ordinarySum = (a, b, c) => a + b + c;

console.log(ordinarySum(1, 2, 3));

// Currying in one piece
let currySum = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(currySum(5)(6)(7));

// Example in small pieces Currying!
let sum3Curry = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

let sum3b = sum3Curry(5);
let sum3c = sum3b(10);
let result = sum3c(15);

console.log(result, " -> in small pieces.");

// ----------------------------------

// let sumCurrySmallPieces = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }

// Currying in one line:
let sumCurrySmallPieces = (a) => (b) => (c) => a + b + c;

let sum1 = sumCurrySmallPieces(25);
let sum2 = sum1(50);
let output = sum2(75);

console.log(output);