function uniqueSequences(data) {
    let arr = data.map(x => JSON.parse(x).sort((a, b) => Number(b) - Number(a)).toString());

    [...new Set(arr)]
        .map(x => x.split(",").map(Number))
        .sort((a, b) => a.length - b.length)
        .map(x => console.log(`[${x.join(", ")}]`))
}

uniqueSequences(
    [
        "[-3, -2, -1, 0, 1, 2, 3, 4]",
        "[10, 1, -17, 0, 2, 13]",
        "[4, -3, 3, -2, 2, -1, 1, 0]"
    ]
);