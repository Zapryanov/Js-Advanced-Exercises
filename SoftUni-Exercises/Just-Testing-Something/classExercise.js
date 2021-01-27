class Person {

    #currentAge;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#currentAge = age;
    }

    greet() {
        return `Hello I am ${this.firstName} ${this.lastName} and I am ${this.age} years old!`;
    };

    get age() {
        return this.#currentAge;
    }

    set age(value) {
        if (value < 0 || value > 120) {
            return this.#currentAge = "The age must be bigger than 0 and less than 120...!!!";
        } else {
            return this.#currentAge = value;
        }
    }
}

const person1 = new Person("Stive", "Bolduin", 22);
const person2 = new Person("Lucy", "Spenson", 33);

console.log(person1.greet());
console.log(person2.greet());

person1.age = 10;
console.log(person1.age);