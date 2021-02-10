// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    Object.defineProperty(this, "fullName", {
        get() {
            return `${this.firstName} ${this.lastName}`;
        }
    })
}

let person = new Person("Albert", "Simpson");

console.log(person.fullName);

person.firstName = "Simon";

console.log(person.fullName);