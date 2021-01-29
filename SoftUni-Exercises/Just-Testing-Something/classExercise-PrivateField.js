class Person {
// Private field can't access outside the class
    #facultyNumber;

    constructor(firstName, lastName, age, facultyNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.#facultyNumber = facultyNumber;
    }

    get fullDescription() {
        return `Full name: ${this.firstName} ${this.lastName};\nAge: ${this.age};\nNumber: ${this.#facultyNumber};\n-------`
    }
    
}

let pesho = new Person("Pesho", "Petrov", 34, 44567089);
console.log(pesho.fullDescription);
console.log(pesho.firstName);
console.log(pesho.lastName);
console.log(pesho.age);

// SyntaxError: Private field '#facultyNumber' must be declared in an enclosing class
// console.log(pesho.#facultyNumber);

// Undefined will return if trying to acces like this
// console.log(pesho.facultyNumber);
