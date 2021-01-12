const foo = {
    fooProp1: 1,
    fooProp2: 2,
    fooProp3: 3
}

const bar = Object.create(foo);
bar.barProp2 = 10;
bar.barProp1 = 123;

for (let key in bar) {
    if (bar.hasOwnProperty(key)) {
        console.log(key, " - ", bar[key]);
    }
}

// console.log(foo);
console.log(Object.keys(bar));