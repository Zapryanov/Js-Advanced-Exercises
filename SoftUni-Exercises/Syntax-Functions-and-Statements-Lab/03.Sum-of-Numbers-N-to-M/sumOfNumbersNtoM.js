function sumNumbersNtoM(x, y) {
    let result = 0;
    for (let i = +x; i <= +y; i++) {
        result += i;
    }
    return result
}

console.log(sumNumbersNtoM("1", "5"));
console.log(sumNumbersNtoM("-8", "20"));