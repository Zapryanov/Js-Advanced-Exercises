function magicMatrices(matrix) {
    let isTrue = true;
    let sumArr = (acc, cur) => acc + cur;
    let valueToCompare = matrix[0].reduce(sumArr);
    
    matrix.map((el, i) => {
        let sumHorizontal = el.reduce(sumArr);
        let sumVertical = matrix
            .map((x, idx) => x = matrix[idx][i])
            .reduce(sumArr)
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