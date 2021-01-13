function lastKNumbersSequence(n, k) {
    let result = [1];

    function agregate(acc, cur) {
        return acc + cur;
    }

    for (let i = 1; i < n; i++ ) {
        let sum = 0;
        let nextNums = result.slice(-k);
        if (nextNums.length < k) {
            sum = result.reduce(agregate);
        } else {
            sum = nextNums.reduce(agregate);
        }
        result.push(sum);
    }
    return result;
}

console.log(lastKNumbersSequence(6, 3));


// function lastKNumbersSequence(n, k) {
//     let result = [1];

//     function agregate(acc, cur) {
//         return acc + cur;
//     }

//     for (let i = 0; i < n - 1; i++ ) {
//         let sum = 0;
//         let nextNums = [];
//         for (let j = k - 1; j >= 0; j-- ) {
//             let num = result[i - j];
//             if (num) {
//                 nextNums.push(num);
//             }
//         }
//         sum = nextNums.reduce(agregate, 0) || 1;
//         result.push(sum);
//     }
//     return result;
// }

// console.log(lastKNumbersSequence(6, 3));