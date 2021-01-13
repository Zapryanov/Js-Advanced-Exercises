function processOddNumbers(arr) {
    return arr
        .filter((el, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(" ")
}

console.log(processOddNumbers([3, 0, 10, 4, 7, 3]))