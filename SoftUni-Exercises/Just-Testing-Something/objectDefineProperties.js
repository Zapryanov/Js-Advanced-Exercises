let obj = {};

Object.defineProperties(
    obj,
    {
        "name": {
            get: () => {console.log("get")},
            set: x => {console.log("set", x)}
        }
    }
)