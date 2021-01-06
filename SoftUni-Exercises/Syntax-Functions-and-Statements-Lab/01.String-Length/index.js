function stringLength(a, b, c) {

    if (typeof(a) === "string" && typeof(b) === "string" && typeof(c) === "string") {
        let sumLength = [...a, ...b, ...c].length;
        let averageLength = sumLength / 3;
        console.log(sumLength);
        console.log(Math.floor(averageLength));
    }

}

stringLength("chocolate", "ice cream", "cake");