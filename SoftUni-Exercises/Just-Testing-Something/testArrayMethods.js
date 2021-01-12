let arr1 = ["Flower", "Car", "Ball"];
let arr2 = ["River", "Ocean", "Lake"];
let arr3 = ["Run", "Jump", "Walk"];

let concatArr = arr1.concat(arr2, arr3);
let spredArr = [...arr1, ...arr2, ...arr3];

console.log(concatArr);
console.log(spredArr);

console.log(arr1);
console.log(arr2);
console.log(arr3);
