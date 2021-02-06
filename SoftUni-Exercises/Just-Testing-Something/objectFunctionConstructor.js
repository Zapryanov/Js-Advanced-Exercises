function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

// This is wrong way!!If functions are put here, then each instance of the constructor function 
// will clone that function. Thus, the more instances we create, the more times 
// this function will be cloned into memory with the newly created object. 
// Therefore, it must be attached to the prototype of the constructor function.

    // this.speak = function() {
    //     console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    // }
}

// Functions must be placed through the prototype because they will 
// not be changed and must be referenced through objects.

// This is a prototype of all objects created with "new" keyword
// when we call "new" and "function constructor": for example "Person"

Person.prototype.speak = function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
}

let pesho = new Person("Pesho", "Georgiev", 26);
let gosho = new Person("Gosho", "Petrov", 28);

console.log(pesho.speak === gosho.speak);

// let proto1 = Object.getPrototypeOf(pesho);
// let proto2 = Object.getPrototypeOf(gosho);
// console.log(proto1);
// console.log(proto2);

// console.log(proto1 === proto2);

// console.log(pesho); // Person {firstName: 'Pesho', lastName: 'Georgiev', age: 26}
// console.log(pesho.constructor.name); // Person

