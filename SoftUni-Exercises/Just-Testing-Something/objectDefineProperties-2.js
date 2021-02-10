const myObj = {
    age: 23
}


Object.defineProperty(myObj, "name", {
    value: "Peter",
    writable: true,         // we can overwrite/change the value
    enumerable: true,       // will be displayed in a "for-in-loop"
    configurable: false      // the property can be deleted
});

myObj.name = "John";

delete myObj.name;  // undefined

console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

for (const key in myObj) {
    const element = myObj[key];
    if (Object.hasOwnProperty.call(myObj, key)) {
        console.log("My element: ", key, " - ", element);
    }else {
        console.log("Is not my element: ", key, " - ", element);
    }
}