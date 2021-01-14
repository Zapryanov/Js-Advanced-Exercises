function everyNthElement(arr) {
    let step = arr.pop();
    return arr.filter((el, i) => i % step === 0).join("\n")
};

console.log(everyNthElement(
    [
        "5",
        "20",
        "31",
        "4",
        "20",
        "2"
    ]
));
