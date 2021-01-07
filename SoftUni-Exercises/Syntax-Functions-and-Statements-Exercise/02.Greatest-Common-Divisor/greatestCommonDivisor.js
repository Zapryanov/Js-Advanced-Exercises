function gcd(x, y) {
    while(y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log(gcd(15, 5));

function greatestCommonDivisor(x, y) {
    let result = 0;

    while((x % y) > 0) {
        result = x % y;
        x = y;
        y = result;
    }
    console.log(y)
}

greatestCommonDivisor(8, 4);