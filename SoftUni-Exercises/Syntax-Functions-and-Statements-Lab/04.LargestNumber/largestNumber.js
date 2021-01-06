function largestNumber(...rest) {
    return `The largest number is ${Math.max(...rest)}.`;
}

console.log(largestNumber(-3, -5, -22.5));