function extractIncreasingSubsequense(data) {
    return data.reduce((acc, cur) => {
        if (cur > acc[acc.length - 1]) {
            acc.push(cur);
        }
        return acc;
    }, [data.shift()]).join("\n")
}

console.log(extractIncreasingSubsequense(
    [
        1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24
    ]
    // [ 20, 3, 2, 15, 6, 1]
    // [ 1, 2, 3, 4 ]
))