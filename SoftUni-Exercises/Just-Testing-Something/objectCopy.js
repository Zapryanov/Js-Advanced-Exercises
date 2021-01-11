const originalObj = {name: "Mike"};
const copyObj = {};

Object.assign(copyObj, originalObj);

console.log(originalObj, " - from originalObj")
console.log(copyObj, " - from copyObj");
console.log(originalObj == copyObj);