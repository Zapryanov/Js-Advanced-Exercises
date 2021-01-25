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

// This is the right way, to pass arguments after function initialization with bind
let firstOutput = test.bind(car);
firstOutput("is awesome", "See you soon");

// This is hardcore way to pass an arguments during function initialization with bind
let firstOutput2 = test.bind(car, "is awesome-2", "See you soon-2");
firstOutput2();

// This will return false, because a brand new function is created through the "bind"
console.log(firstOutput === test);