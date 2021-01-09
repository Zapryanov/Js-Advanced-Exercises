// This is beter real solution

function squareOfStars(delimiter, x = 5) {
    let result = new Array(x);

    for (let i = 0; i < x; i++) {
        result[i] = delimiter.repeat(x).split("").join(" ");
    }

    console.log(result.join("\n"))
}

squareOfStars("*", 3);


// This is solution for Judge system

function squareOfStars2(x = 5) {
    for (let i = 0; i < x; i++) {
        console.log("* ".repeat(x))
    }
}

squareOfStars2(3);