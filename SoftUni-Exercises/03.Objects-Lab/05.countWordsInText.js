// My final solution with - Only ONE Variable...!!!

function countWordsInText(arr) {
    let result = arr[0]
        .match(/\w+/g)
        .reduce((acc, cur) => {
            if (!acc[cur]) {
                acc[cur] = 0;
            }
            acc[cur] += 1;
            return acc;
        }, {});
    
    return JSON.stringify(result);
}


console.log(countWordsInText(
    ["JS devs use Node.js for_ server-side JS.-- JS for devs"]
))

// -------------------------------------------------------------------

// Solution - Martin Chaov. 
// With this additional function, it makes the code more readable.

// function countWordsInText(arr) {

//     function addPropIfMissing(a, prop) {
//         if (typeof a[prop] === "undefined") {
//             a[prop] = 0;
//         }
//         return a;
//     }

//     let result = arr[0]
//         .match(/\w+/g)
//         .reduce((acc, cur) => {
//             addPropIfMissing(acc, cur);
//             acc[cur] += 1;
//             return acc;
//         }, {});
    
//     return JSON.stringify(result);
// }

// -----------------------------------------------------------------------

// My first solution with one variable more.

// function countWordsInText(arr) {
//     const arrayFromWords = arr[0].match(/\w+/g);
//     const result = arrayFromWords.reduce((acc, cur) => {
//         if (!acc[cur]) {
//             acc[cur] = 0;
//         }
//         acc[cur] += 1;
//         return acc;
//     }, {});
    
//     return JSON.stringify(result);
// }

// console.log(countWordsInText(
//     ["JS devs use Node.js for_ server-side JS.-- JS for devs"]
// ))