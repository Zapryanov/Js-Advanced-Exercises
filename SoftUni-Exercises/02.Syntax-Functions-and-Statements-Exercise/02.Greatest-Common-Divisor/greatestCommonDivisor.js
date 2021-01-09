function gcd(x, y) {
    while(y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

console.log(gcd(15, 5));

function greatestCommonDivisor(firstNum, secondNum) {

    let num = Math.min(firstNum, secondNum);
    for (let i = num; i > 0; i--) {
        if (firstNum % i === 0 && secondNum % i === 0) {
            return i;
        }
    }

}

console.log(greatestCommonDivisor(8, 4));

// function greatestCommonDivisor(x, y) {
//     let result = 0;

//     while((x % y) > 0) {
//         result = x % y;
//         x = y;
//         y = result;
//     }
//     console.log(y)
// }

// greatestCommonDivisor(8, 4);