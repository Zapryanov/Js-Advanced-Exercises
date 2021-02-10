const myObj = {};

Object.defineProperty(myObj, "name", {
    get: function() {           // get - Get is the same, as if we set "value" and "writable - false"
        return this._name;
    },
    set: function(value) {      // set - If we have "Get" and "Set" is the same, as if we had set "value" and "writable - true"
        this._name = value
    }
});

console.log(myObj.name);    // undefined
myObj.name = "John";
console.log(myObj.name);    // John
fa