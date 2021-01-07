function circleArea(arg) {
    let type = typeof arg;
    let result = 0;

    if (typeof arg !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    } else {
        result = Math.PI * (arg * arg);
        console.log(result.toFixed(2))
    }
}

circleArea(5);
circleArea("name");