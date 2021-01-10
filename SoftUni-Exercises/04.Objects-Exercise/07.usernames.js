function usernames(arr) {
    return [...new Set(arr.sort((a, b) => a.length - b.length || a.localeCompare(b)))].join("\n")
}

console.log(usernames(
    [
        "Ashton",
        "Kutcher",
        "Ariel",
        "Lilly",
        "Keyden",
        "Aizen",
        "Billy",
        "Braston"
    ]
))