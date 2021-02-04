const person1 = {
    name: "Gosho",
    hasPan: true,
    write: function() {
        console.log(`My name is ${this.name}.`);
    }
}

const person2 = {
    name: "Ivan"
}

Object.setPrototypeOf(person2, person1);

const person3 = Object.create(person1);
person3.name = "Pesho";

person3.write();

for (const key in person2) {
    if (person2.hasOwnProperty.call(person2, key)) {
        console.log(`Mine: ${key} - ${person2[key]}`);        
    } else {
        console.log(`Not mine: ${key} - ${person2[key]}`);
    }
}

person2.write();

let protoPerson2 = Object.getPrototypeOf(person2);
console.log(protoPerson2);