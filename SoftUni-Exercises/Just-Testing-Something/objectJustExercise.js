let obj = { 
    name: "John", 
    cars: {
        audi: {
            "RS-4": {
                engine: "V-8 Atmosphere",
                color: "blue"
            },
            "RSQ-8": {
                engine: "V-10 Turbo",
                color: "gray"
            }
        },
        mercedes: {
            "S-Class": {
                engine: "V-12 Biturbo",
                color: "silver"
            }
        }
    } 
};

// The way to turn an object into array
let objEntries = Object.entries(obj.cars);
console.log(objEntries);

// A way to turn objEntries back into an object
let fromEntriesToObject = Object.fromEntries(objEntries);
console.log(fromEntriesToObject);
