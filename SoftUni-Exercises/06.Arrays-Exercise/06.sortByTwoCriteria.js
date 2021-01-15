function sortByTwoCriteria(arr) {
    return arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
}

console.log(sortByTwoCriteria(
    [
        "test",
        "Deny",
        "omen",
        "Default"
    ]

    // [
    //     "Isacc",
    //     "Theodor",
    //     "Jack",
    //     "Harrison",
    //     "George"
    // ]
))