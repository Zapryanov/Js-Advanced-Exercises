function addAndRemove(input) {
    let command = {
        counter: 1,
        add: (arr, num) => [...arr, num],
        remove: (arr) => [...arr.slice(0, arr.length - 1)]
    }

    let result = input.reduce((acc, cur) => {
        acc = command[cur](acc, command["counter"]);
        command["counter"]++
        return acc;
    }, [])

    return result.length > 0 ? result.join("\n") : "Empty";
}

console.log(addAndRemove(
    [
        "add",
        "add",
        "remove",
        "add",
        "add"
    ]
    // [
    //     "remove",
    //     "remove",
    //     "remove"
    // ]
))

// Old school solution -------------------------------------------

// function addAndRemove(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         let command = arr[i];
//         if (command === "add") {
//             result.push(i + 1);
//         } else {
//             result.splice(i - 1, 1);
//         }
//     }
//     if (result.length === 0) {
//         return "Empty";
//     } else {
//         return result.join("\n")
//     }
// }

// console.log(addAndRemove(
//     [
//         "add",
//         "add",
//         "remove",
//         "add",
//         "add"
//     ]
//     // [
//     //     "remove",
//     //     "remove",
//     //     "remove"
//     // ]
// ))