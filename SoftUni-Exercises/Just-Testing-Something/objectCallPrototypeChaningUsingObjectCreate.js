function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.speak = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`)
}

const pesho = new Person("Pesho", "Georgiev");

console.log(pesho); //  Person {firstName: 'Pesho', lastName: 'Georgiev'}
pesho.speak();  //  Hello, my name is Pesho Georgiev.

// ---------------- Inheritance with Built-In Function Call()----------------- //

function Student(firstName, lastName, course) {

// In this way we call the constructor of the parent

    Person.call(this, firstName, lastName);    // <--- Equivalent to the class sintaxis --- Simulating SUPER...!!!

    this.course = course;
}

Student.prototype = Object.create(Person.prototype);    // Prototype Chaining

Student.prototype.speakStudent = function(grades) {
    console.log(`Student: ${this.firstName} ${this.lastName} from ${this.course} course. His grades are ${grades}.`);
}

const firstStudent = new Student("Stamat", "Petrov", "Js-Advanced");

console.log(firstStudent);  // Student {firstName: 'Stamat', lastName: 'Petrov', course: 'Js-Advanced'}
firstStudent.speakStudent("5, 6, 6");   // Student: Stamat Petrov from Js-Advanced course. His grades are 5, 6, 6.
firstStudent.speak();

console.log(firstStudent instanceof Person);    // firstStudent is instance of boath - Person and Student
console.log(firstStudent instanceof Student);   // firstStudent is instance of boath - Person and Student