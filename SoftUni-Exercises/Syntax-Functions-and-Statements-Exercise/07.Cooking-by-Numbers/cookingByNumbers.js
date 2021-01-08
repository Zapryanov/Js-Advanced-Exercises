function cookingByNumbers(arr) {
    let initial = +arr.shift();

    const obj = {
        "chop": (n) => n / 2,
        "dice": (n) => Math.sqrt(n),
        "spice": (n) => n + 1,
        "bake": (n) => n * 3,
        "fillet": (n) => n * 0.8
    }

    let result = arr.reduce((acc, cur) => {
        let newValue = acc[acc.length - 1] || initial;
        acc.push(obj[cur](newValue));
        return acc;
    }, []);

    return result.join("\n");
}

console.log(cookingByNumbers(["9", "dice", "spice", "chop", "bake", "fillet"]));

// My previous solution

// function cookingByNumbers2(arr) {
//     let num = Number(arr.shift());

//     const obj = {
//         "chop": (x) => x /= 2,
//         "dice": (x) => x = Math.sqrt(x),
//         "spice": (x) => x += 1,
//         "bake": (x) => x *= 3,
//         "fillet": (x) => x *= 0.8
//     }

//     arr.forEach(x => {
//         num = obj[x](num)
//         console.log(num)
//     })
// }

// console.log(cookingByNumbers2(["9", "dice", "spice", "chop", "bake", "fillet"]));