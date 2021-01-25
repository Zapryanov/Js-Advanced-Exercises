// let person = {
//     name: "John",
//     age: 23,
//     eyeColor: "brown",
//     country: "England"
// }

// Object.defineProperty(person, "age", {enumerable: false});
// Object.defineProperty(person, "job", {enumerable: true, value: "Js-Programmer"});

// for (const key in person) {
//     console.log(key, person[key]);
// }

// console.log("-------------------------------");

// console.log(person.propertyIsEnumerable("age"));
// console.log(person.job);

// console.log("-------------------------------");

let car = {brand: "Audi", model: "RSQ-8", price: 180000};

Object.seal(car);

car.price = 200000;
car.color = "blue";
delete car.price;

// console.log(car.price);

for (const key in car) {
    if (Object.hasOwnProperty.call(car, key)) {
        const element = car[key];
        console.log(element)        
    }
}