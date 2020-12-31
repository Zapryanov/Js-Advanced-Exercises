function arrayDiff(a, b) {
    let newArr = [];
    a.map((el) => {
        if (!b.includes(el)) {
            newArr.push(el);
        }
    })
    console.log(newArr);
    return newArr;
}

arrayDiff([3, 4, 5], [3]);
arrayDiff([], [4, 5]);