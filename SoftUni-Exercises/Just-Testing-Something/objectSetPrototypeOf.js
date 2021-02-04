const person1 = {
    name: "Gosho",
    hasPan: true,
    write: function(name) {
        console.log(`My name is ${this.name}. From ${name}`);
    }
}

const person2 = {
    name: "Ivan"
}

Object.setPrototypeOf(person2, person1);

const person3 = Object.create(person1);
person3.name = "Pesho";

person3.write("person3");

console.log("---------------")

for (const key in person2) {
    if (person2.hasOwnProperty.call(person2, key)) {
        console.log(`Mine: ${key} - ${person2[key]}`);        
    } else {
        console.log(`Not mine: ${key} - ${person2[key]}`);
    }
}

console.log("-----------------")

person2.write("person2");

let protoPerson2 = Object.getPrototypeOf(person2);
console.log(protoPerson2);

console.log(person1.name);