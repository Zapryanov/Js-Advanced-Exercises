function test(description, greeting) {
    this.models.forEach(eachModel => {
        console.log(`${this.brand} - ${eachModel} - ${description}.`);
    });
    console.log(`${greeting} ${this.brand}!`);
};

let car = {
    brand: "Audi",
    models: ["A6-Allroad", "RS-6", "A8", "RSQ-8"],
    year: 2021
}

// At first position we pass the context (reference from an object for example)
// In the following position, we pass an array with arguments listed with commas.

test.apply(car, ["awesome car", "See you soon"]);