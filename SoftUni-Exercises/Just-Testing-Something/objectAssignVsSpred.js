let arrOfObjects = [
    {name: "Pesho"},
    {age: 32},
    {eyeColor: "brown", name: "Gosho"},
    {car: "Audi"},
    {age: 23}
];

let result1 = arrOfObjects.reduce((acc, cur) => {
    return {...acc, ...cur}
},{});

console.log(result1); // {name: 'Gosho', age: 23, eyeColor: 'brown', car: 'Audi'}

let result2 = arrOfObjects.reduce((acc, cur) => {
    return Object.assign(acc, cur)
},{});

console.log(result2); // {name: 'Gosho', age: 23, eyeColor: 'brown', car: 'Audi'}