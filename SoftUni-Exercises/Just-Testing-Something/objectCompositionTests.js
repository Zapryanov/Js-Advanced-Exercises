// Desctructoring - Object

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
console.log(teachers)
console.log(maxGrade);


console.log("-----------------------")

// Destructoring - Array

const arr = ["Pesho", "Monica", "Stamat", "Teodor", "Alice", "Nikolina"];

const [personOne, personTwo, personThree, ...others] = arr;

console.log(personOne);
console.log(personTwo);
console.log(personThree);
console.log(others);