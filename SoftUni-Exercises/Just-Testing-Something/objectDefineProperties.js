let obj = {};
obj["age"] = 23;

Object.defineProperties(
    obj,
    {
        "name": {
            get: () => {console.log("get")},
            set: x => {console.log("set", x)}
        }
    }
)

console.log(obj)