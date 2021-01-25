function greet(message, bye) {
    this.grades.forEach(eachGrade => {
        console.log(`${this.name}: ${message} - ${eachGrade}`);
    });
    console.log(`${bye} - ${this.name}!`);
}

let person = {
    name: "Stela",
    grades: [3, 6, 4, 5, 6]
}

// At first position we pass the context (reference from an object for example)
// In the following positions, we pass arguments listed with commas

greet.call(person, "hello", "Good bye!");

// The context here is object literal - just for example, but not good idea
greet.call({name: "Gosho", grades: [1, 2, 3]}, "hi", "Good bye!");


// function test(msg, greeteng) {
//     this.models.forEach(eachModel => {
//         console.log(`${this.brand} - ${eachModel} - ${msg}`);
//     });
//     console.log(`${greeteng} ${this.brand}!`);
// };

// let car = {
//     brand: "Audi",
//     models: ["A6-Allroad", "RS-6", "A8", "RSQ-8"],
//     year: 2021
// }

// test.call(car, "awesome car.", "See you soon");