// Better way - Martin Chaov implementation

function diagonalSums(matrixTwoD) {
    return matrixTwoD.reduce((result, row, i, arr) => {
        result[0] += row[i];
        result[1] += row[arr.length - 1 - i]
        return result;
    }, [0, 0]).join(" ")
}

console.log(diagonalSums(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
))

// function diagonalSums(matrixTwoD) {
//     let leftDiagonal = [];
//     let rightDiagonal = [];

//     function sum(acc, cur) {
//         acc += cur;
//         return acc;
//     }

//     for (let i = 0; i < matrixTwoD.length; i++) {
//         let arr = matrixTwoD[i];
//         rightDiagonal.push(arr[arr.length - i - 1]);
//         leftDiagonal.push(arr[i]);
//     }

//     let leftSum = leftDiagonal.reduce(sum);
//     let rightSum = rightDiagonal.reduce(sum);

//     return `${leftSum} ${rightSum}`;
// }

// console.log(diagonalSums(
//     [
//         [3, 5, 17],
//         [-1, 7, 14],
//         [1, -8, 89]
//     ]
// ))