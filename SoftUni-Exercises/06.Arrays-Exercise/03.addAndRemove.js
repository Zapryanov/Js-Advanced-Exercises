function addAndRemove(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === "add") {
            result.push(i + 1);
        } else {
            result.splice(i - 1, 1);
        }
    }
    if (result.length === 0) {
        return "Empty";
    } else {
        return result.join("\n")
    }
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