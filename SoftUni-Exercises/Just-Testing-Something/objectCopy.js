// Example Shallow copy vs Deep Copy
// Allways use Deep Copy method -> "let copiedObject = JSON.parse(JSON.stringify(originalObject));"
// to prevent changing property values over the original object

let person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "North 1st street",
        city: "San Jose",
        state: "CA",
        country: "USA"
    }
};

let copiedPerson = Object.assign({}, person);

copiedPerson.firstName = "Jane";
copiedPerson.address.street = "Aphitheatre Old Town";
copiedPerson.address.city = "Plovdiv";

console.log("original object1 - ", JSON.stringify(person))
console.log("copy1 ------------ ", JSON.stringify(copiedPerson));

let person2 = {
    firstName: "Richard",
    lastName: "Day",
    address: {
        street: "South",
        city: "Tonbridge",
        state: "Wells",
        country: "United Kingdom"
    }
};

let copiedPerson2 = JSON.parse(JSON.stringify(person2));

copiedPerson2.firstName = "First";
copiedPerson2.lastName = "Last";
copiedPerson2.address.street = "East";
copiedPerson2.address.city = "Plovdiv";
copiedPerson2.address.state = "Trakia";
copiedPerson2.address.country = "Bulgaria";

console.log("original object2 - ", JSON.stringify(person2));
console.log("copy2 ------------ ", JSON.stringify(copiedPerson2));

// -----------------------------------------------------------------

// const originalObj = {name: "Mike", tall: 185, weight: 90};

// const copyObjAssign = {};
// Object.assign(copyObjAssign, originalObj);
// copyObjAssign["age"] = 23;

// const spreadCopy = {...originalObj}
// spreadCopy["city"] = "Plovdiv";

// const stringifyAndParseCopy = JSON.parse(JSON.stringify(originalObj));
// stringifyAndParseCopy["wheather"] = "sunny";


// console.log(originalObj, " - from originalObj");
// console.log(copyObjAssign, " - from copyObjAssign");
// console.log(spreadCopy, " - from spreadCopy");
// console.log(stringifyAndParseCopy, " - from stringifyAndParseCopy");
// console.log(originalObj == copyObjAssign);
// console.log(originalObj == spreadCopy);
// console.log(originalObj == stringifyAndParseCopy);
// console.log(originalObj, " - from originalObj");

// --------------------------------------------------------
// Primitive values

// let counter = 1;
// let copyCounter = counter;

// copyCounter = 2;

// console.log(counter);
// console.log(copyCounter);

// ---------------------------------------------------------
// Reference values

// let originalObj = {
//     name: "Ivan",
//     height: 175
// }
// console.log(originalObj);

// let copyObj = originalObj;
// console.log(copyObj);
// copyObj["weight"] = 85;
// copyObj["name"] = "Name is changed";

// console.log(originalObj, " - original");
// console.log(copyObj, " - copy");

// ----------------------------------------------------------
