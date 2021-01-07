function sameNumbers(num) {
    let arr = num.toString().split("");
    return `${arr.every(el => el === arr[0])}\n${arr.reduce((acc, cur) => acc + Number(cur), 0)}`;
}

// function sameNumbers(num) {
//     const arr = num.toString().split("").map(Number);
//     const isEqual = arr.every((el, i, arr) => el === arr[0]);
//     const sum = arr.reduce((acc, cur) => acc + cur, 0);

//     return [
//         isEqual,
//         sum
//     ].join("\n");
// }

console.log(sameNumbers(2222222));