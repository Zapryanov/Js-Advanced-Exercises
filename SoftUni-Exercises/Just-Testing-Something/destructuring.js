// Desctructuring - Object

const person = {
    firstName: "Pesho",
    age: 22,
    grades: [3, 5, 4, 6, 6],
    school: {
        name: "SoftUni",
        maxGrade: 12,
        address: "Tintiava-23",
        printReport: function() {
            console.log(this.name);
        },
        teachers: ["Mick, Nick", "John"]
    },
    reportGrades: function() {
        return `My grades are ${this.grades.join(" - ")}.`;
    }
}

person.school.printReport();

let {firstName, age} = person;
console.log(firstName);
console.log(age);

let { reportGrades } = person;

let showGrades = reportGrades.bind(person);
console.log(showGrades());

const { school: { teachers, maxGrade } } = person;
// console.log(teachers);
// console.log(maxGrade);


// console.log("-----------------------");

// Destructuring - Array

const arr = ["Pesho", "Monica", "Stamat", "Teodor", "Alice", "Nikolina"];

const [personOne, personTwo, personThree, ...others] = arr;000

// console.log(personOne);
// console.log(personTwo);
// console.log(personThree);
// console.log(others);

// Destructuring nested Array - destructuring

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let [first, second] = matrix;

console.log(first, second)

// Destructoring mixed objects in an array

let arrWithObjects = [
    { catName: "Navcho", catAge: 5 },
    { catName: "Kitty", catAge: 3 },
    { catName: "Bimbo", catAge: 4 },
];

let [ {catName, catAge}, secondObj ] = arrWithObjects;

console.log(catName, catAge);
console.log(secondObj);