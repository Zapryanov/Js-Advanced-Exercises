function diagonalSums(matrixTwoD) {
    let leftDiagonal = [];
    let rightDiagonal = [];

    function sum(acc, cur) {
        acc += cur;
        return acc;
    }

    for (let i = 0; i < matrixTwoD.length; i++) {
        let arr = matrixTwoD[i];
        rightDiagonal.push(arr[arr.length - i - 1]);
        leftDiagonal.push(arr[i]);
    }

    let leftSum = leftDiagonal.reduce(sum);
    let rightSum = rightDiagonal.reduce(sum);

    return `${leftSum} ${rightSum}`;
}

console.log(diagonalSums(
    [
        [3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]
    ]
))