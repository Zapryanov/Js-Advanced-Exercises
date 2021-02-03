function cars(input) {

    function objCommands() {

        const result = {};

        return {
            create: (objName) => result[objName] = {},
            set: (objName, key, value) => result[objName][key] = value,
            inherits: (a, b) => Object.setPrototypeOf(result[a], result[b]),
            print: function(objName) {
                const arrObjects = [];
                for (const key in result[objName]) {
                    arrObjects.push(`${key}:${result[objName][key]}`);
                }
                console.log(arrObjects.join(", "));
            }
        }
    }

    let output = objCommands();

    input.forEach(line => {
        const [ command, ...args ] = line.split(" ");
        if (command === "create") {
            output.create(args[0]);
            if (args[1] === "inherit") {
                output.inherits(args[0], args[2]);
            }
        } else {
            output[command](args[0], args[1], args[2])
        }
    })
}

cars(
    [
        "create c1",
        "create c2 inherit c1",
        "set c1 color red",
        "set c2 model new",
        "print c1",
        "print c2"
    ]
)