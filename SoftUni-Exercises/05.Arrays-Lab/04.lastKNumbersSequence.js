function lastKNumbersSequence(n, k) {
    let result = [1];

    function agregate(acc, cur) {
        return acc + cur;
    }

    for (let i = 1; i < n; i++ ) {
        let sum = 0;
        let nextNums = result.slice(-k);
        nextNums.length < k ? sum = result.reduce(agregate) : sum = nextNums.reduce(agregate);
        result.push(sum);
    }
    return result;
}

console.log(lastKNumbersSequence(6, 3));

// This is old programming way except "reduce"

// function lastKNumbersSequence(n, k) {
//     let result = [1];
// 
//     for (let i = 0; i < n - 1; i++ ) {
//         let sum = 0;
//         let nextNums = [];
//         for (let j = k - 1; j >= 0; j-- ) {
// // Previous numbers "K-places" before last number.
// // If there isn't number, the veriable "num" is "undefined"
//             let num = result[i - j];
//             if (num) {
//                 nextNums.push(num);
//             }
//         }
//         if (nextNums.length > 0) {
//             for (let k = 0; k < nextNums.length; k++) {
//                 sum += nextNums[k];
//             }
//         } else {
//             sum = 1;
//         }
//         result.push(sum);
//     }
//     return result;
// }

// console.log(lastKNumbersSequence(6, 3));