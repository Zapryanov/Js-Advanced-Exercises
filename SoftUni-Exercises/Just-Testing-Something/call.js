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

greet.call(person, "hello", "Good bye!");
greet.call({name: "Gosho", grades: [1, 2, 3]}, "hi", "Good bye!");