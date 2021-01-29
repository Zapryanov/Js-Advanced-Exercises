class Car {
// Private Fields - can't access outside the class
    #currentBrand;
    #currentPrice;
    constructor(brand, model, engine, color, price) {
        this.#currentBrand = brand;
        this.model = model;
        this.engine = engine;
        this.color = color;
        this.#currentPrice = price;
    }

// Test getter and setter

    // get brand() {
    //     return this.#currentBrand;
    // }

    // set brand(value) {
    //     if (value !== "Audi") {
    //         this.#currentBrand = `The car must be only Audi!!! Your value is -${value}-, please select Audi...!`;
    //     } else {
    //         this.#currentBrand = value;
    //     }
    // }

    get fullDescription() {
        return `${this.#currentBrand} ${this.model} with engine ${this.engine} and ${this.color} color cost: €${this.#currentPrice}.`
    }

    display() {
        return `${this.brand} is awesome!`;
    }
}

const audi = new Car("Audi", "RSQ-8", "V10-Atmosphere", "sky-blue", "120000");
const wv = new Car("WV", "Golf", "3.0-Turbo", "silver", "35000");

// console.log(audi.brand);
// console.log(audi.display());
// console.log(wv.brand);

console.log(audi.fullDescription);
// console.log(audi.#currentBrand)