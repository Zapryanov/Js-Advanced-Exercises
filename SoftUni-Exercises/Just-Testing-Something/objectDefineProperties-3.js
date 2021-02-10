const myObj = {};

Object.defineProperty(myObj, "size", {
    enumerable: false,
    get: function() {
        return Object.keys(this).length;
    }
})

myObj["John"] = "+1-3557-1983";
myObj["Peter"] = "+1-3557-2375";
myObj["May"] = "+1-3557-8355";
myObj["Lisa"] = "+1-3557-1735";

console.log("myObj-size: ", myObj.size);

for (const key in myObj) {
    if (myObj.hasOwnProperty.call(myObj, key)) {
        const element = myObj[key];
        console.log(element)
    }
}

console.log(myObj)