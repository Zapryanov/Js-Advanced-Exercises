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
        get: function() {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function(value) {
            [ this.firstName, this.lastName ] = value.split(" ");
        }
    })
}

let person = new Person("Albert", "Simpson");

console.log(person.fullName);

person.firstName = "Simon";

console.log(person.fullName);

person.fullName = "Pere Toshev";

console.log(person.fullName);