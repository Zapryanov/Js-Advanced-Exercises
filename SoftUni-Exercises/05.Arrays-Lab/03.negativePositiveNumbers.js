// The best solution of Martin Chaov

function negativePositiveNumbers(arr) {
    let actionsMap = {
        true: "unshift",
        false: "push"
    }
    return arr.reduce((acc, cur) => acc[actionsMap[cur < 0]](cur) && acc, []).join("\n");
}

console.log(negativePositiveNumbers([3, -2, 0, -1]));
// console.log(negativePositiveNumbers([7, -2, 8, 9]));

// Using reduce but there is a ternary operator ----------------- My Solution-----
// which doesn't replace the If-statement

// function negativePositiveNumbers(arr) {
//     return arr.reduce((acc, cur) => {
// //         cur < 0 ? acc.unshift(cur) : acc.push(cur);
//         return acc;
//     }, []).join("\n");
// }

// console.log(negativePositiveNumbers([3, -2, 0, -1]));
// console.log(negativePositiveNumbers([7, -2, 8, 9]));


// Solution without If-statemnt using object ----------------------------------------

// function negativePositiveNumbers(arr) {
//     let actionsMap = {
//         true: "unshift",
//         false: "push"
//     }

//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[actionsMap[arr[i] < 0]](arr[i]);
//     }

//     return result.join("\n");
// }

// console.log(negativePositiveNumbers([3, -2, 0, -1]));
