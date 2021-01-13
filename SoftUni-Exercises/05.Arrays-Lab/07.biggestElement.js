function biggestElement(arr) {
    return arr.reduce((acc, cur) => {
        let max = Math.max(...cur, acc);
        max > acc ? acc = max : acc;
        return acc;
    }, 0);

// The example with working too

    // let biggest = 0;
    // arr.map(curArr => {
    //     let max = Math.max(...curArr, biggest);
    //     biggest = (max > biggest) ? max : biggest;
    // })
    // return biggest
}

console.log(biggestElement(
    [
        [3, 5, 7, 12],
        [-1, 4, 33,2],
        [8, 3, 0, 4]
    ]
))