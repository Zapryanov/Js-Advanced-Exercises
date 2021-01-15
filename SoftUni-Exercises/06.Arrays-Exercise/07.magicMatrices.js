function magicMatrices(matrix) {
    let isTrue = true;
    let sumArr = (acc, cur) => acc + cur;
    let valueToCompare = matrix[0].reduce(sumArr, 0);
    
    matrix.map((el, i) => {
        let sumHorizontal = el.reduce(sumArr, 0);
        let sumVertical = matrix
            .map((x, idx) => x = matrix[idx][i])
            .reduce(sumArr, 0)
        if (sumHorizontal !== valueToCompare || sumVertical !== valueToCompare) {
            isTrue = false
        }
    });

    return isTrue;
}

console.log(magicMatrices(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
))