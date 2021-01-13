function lastKNumbersSequence(n, k) {
    let result = [1];

    function agregate(acc, cur) {
        return acc + cur;
    }

    for (let i = 1; i < n; i++ ) {
        let sum = 0;
        let nextNums = result.slice(-k);
        nextNums.length < k ? sum = result.reduce(agregate) : sum = nextNums.reduce(agregate);
        result.push(sum);
    }
    return result;
}

console.log(lastKNumbersSequence(6, 3));