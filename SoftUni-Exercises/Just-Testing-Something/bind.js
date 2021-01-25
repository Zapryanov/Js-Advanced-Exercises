let car = {
    brand: "Porshe",
    models: ["911-Carrera", "918-Spider", "Panamera", "911-Turbo", "Taycan"]
}

function test(msg, bye) {
    this.models.forEach(eachCar => {
        console.log(`${this.brand} - ${eachCar} ${msg}.`);
    });
    console.log(`${bye} ${this.brand}.`);
}

let firstOutput = test.bind(car);

firstOutput("is awesome", "See you soon");

// This will return false, because a brand new function is created through the "bind"
console.log(firstOutput === test);