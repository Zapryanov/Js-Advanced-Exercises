function calorieObject(arr) {
    return arr.reduce((acc, cur, i, arrSnapshot) => {
        if (i % 2 === 0) {
            acc[arrSnapshot[i]] = +arrSnapshot[i + 1];
        }
        return acc;
    }, {})
}

console.log(calorieObject(["Yoghurt", 48, "Rise", 138, "Apple", 52]));