function negativePositiveNumbers(arr) {
    return arr.reduce((acc, cur) => {
        cur < 0 ? acc.unshift(cur) : acc.push(cur);
        return acc;
    }, []).join("\n");
}

console.log(negativePositiveNumbers([3, -2, 0, -1]));
// console.log(negativePositiveNumbers([7, -2, 8, 9]));