function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.speak = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
}

function newPerson(constrFunction, ...args) {
// Create new Object
    let newObj = {};

// Set prototype
    Object.setPrototypeOf(newObj, constrFunction.prototype);

// Call constructor with context
    constrFunction.apply(newObj, args);

// Return new Object
    return newObj;
}

let personOne = newPerson(Person, "Ivan", "Zapryanov");

personOne.speak();