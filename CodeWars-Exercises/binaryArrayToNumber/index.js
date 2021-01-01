const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2);
};

binaryArrayToNumber([1, 1, 1, 1])
binaryArrayToNumber([0, 0, 0, 1])
binaryArrayToNumber([1, 1, 1, 1, 1])