class Car {
// Private Field can't access outside the class.
    #brand;

    constructor(brand, model, engine, color, price) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
        this.color = color;
        this.price = price;
    }

    get brand() {
        return this.#brand;
    }

// Simple validation with setter

    set brand(value) {
        if (value !== "Audi") {
            throw new Error(`Here is only for Audi fans!!!The car must be only Audi!!! Your value is /${value}/...!!!`);
        } else {
            this.#brand = value;
        }
    }

    get fullDescription() {
        return `${this.#brand} ${this.model} with engine ${this.engine} and ${this.color} color cost: €${this.price}.`
    }
}

const audi = new Car("Audi", "RSQ-8", "V10-Atmosphere", "sky-blue", "120000");
console.log(audi.fullDescription);

// ----------------------------------------------------------------------

// If you try to change Brand, the code will throw an error
// from the Setter in the class Car

audi.brand = "Renault";
console.log(audi.brand);

// -----------------------------------------------------------------------

// Wrong instance was created because of the brand:
// const wv = new Car("WV", "Golf", "3.0-Turbo", "silver", "35000");

// Wrong Brand - code will throw an error:
// console.log(wv.brand);