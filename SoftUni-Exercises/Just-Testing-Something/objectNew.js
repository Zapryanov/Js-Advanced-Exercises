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
// Тук сетваме прототипа на нашия обект. Прототипа на "конструктор-функцията",
// ще бъде прототипа на нашия новосъздаден обект
    Object.setPrototypeOf(newObj, constrFunction.prototype);

// Call constructor with context
// Изпълняване на конструктора с правилния "контекст-newObj"
    constrFunction.apply(newObj, args);

// Return new Object
    return newObj;
}

let personOne = newPerson(Person, "Ivan", "Zapryanov");

personOne.speak();