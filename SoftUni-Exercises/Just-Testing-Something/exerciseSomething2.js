// Call

function greet(message, place, numDays) {
    return `${message} ${this.name}! I'm in ${place} from ${numDays} days.`;
}

let personOne = {
    name: "Ivan"
}

console.log("------------from Call---------------");
console.log(greet.call(personOne, "Hello", "Varna", "two"))

// Apply

function describeCar(model, engine, color) {
    return `${this.brand} ${model} with ${engine} engine and ${color} color is my favourite car.`;
}

let car = {
    brand: "Audi"
}

console.log("------------from Apply--------------");
console.log(describeCar.apply(car, ["RS-6", "V-6", "sky-blue"]));

// Bind

function person(job, car) {
    return `${this.name} goes to work with his ${this.brand} model ${car}. He works as ${job}.`;
}

let pesho = {
    name: "Pesho",
    brand: "Audi"
}

let bindOutput = person.bind(pesho);
console.log("------------from Bind--------------");
console.log(bindOutput("JavaScript Programmer", "RS-6"));