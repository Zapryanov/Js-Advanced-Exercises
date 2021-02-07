function extendPrototype(classToExtend) {
    
// Добавяне на пропърти и метод през прототипа на инстанцията

    classToExtend.prototype.species = "Human";
    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

class Person {
    constructor(name) {
        this.name = name
    }
    toString() {
        return `Message from toString() method.`;
    }
}

extendPrototype(Person);

const firstPerson = new Person("Ivan");

console.log(firstPerson.toSpeciesString());