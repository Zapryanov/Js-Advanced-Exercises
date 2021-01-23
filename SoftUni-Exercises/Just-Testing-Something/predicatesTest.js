let isValidName = (name) => name.split(" ").length == 2;

// console.log(isValidName("Ivan Ivanov"));
// console.log(isValidName("Ivan"));
// console.log(isValidName("Ivan Ivanov Petrov"));

// let arr = [1, 2, 3, 4, 5];

// let found = arr.find(isBigEnough);

// function isBigEnough(el) {
//     return el > 1;
// }

// console.log(found);

// Using Built-In Higher Order Functions

let names = [
    "Ivan",
    "Stoyan Stoimenov",
    "Panayot Shterev",
    "Atanas Georgiev Peshterski"
];

let filteredNames = names.filter(isValidName);

console.log(filteredNames)