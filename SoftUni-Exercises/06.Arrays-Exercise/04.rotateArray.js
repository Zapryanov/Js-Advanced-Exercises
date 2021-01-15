function rotateArray(arr) {
    let copy = arr.slice(0);
    let times = Number(copy.pop()) % copy.length;

    return copy.reduceRight((acc, cur) => {
        if (times) {
            acc = [cur, ...acc.slice(0, copy.length - 1)];
            times--;
        }
        return acc;
    }, [...copy])
}

console.log(rotateArray(
    // [
    //     "1",
    //     "2",
    //     "3",
    //     "4",
    //     "2"
    // ]

    [
        "Banana",
        "Orange",
        "Coconut",
        "Apple",
        "15"
    ]
))


// function rotateArray(arr) {
//     let copy = arr.slice(0);
//     let times = Number(copy.pop()) % copy.length;

//     for (let i = 0; i < times; i++) {
//         let removed = copy.pop();
//         copy.unshift(removed);
//     }

//     return copy;
// }

// console.log(rotateArray(
//     // [
//     //     "1",
//     //     "2",
//     //     "3",
//     //     "4",
//     //     "2"
//     // ]

//     [
//         "Banana",
//         "Orange",
//         "Coconut",
//         "Apple",
//         "15"
//     ]
// ))