function listProcessor(input) {
    let arr = [];

    let obj = {
        add: (word) => arr.push(word),
        remove: (word) => arr = arr.filter(x => x !== word),
        print: () => console.log(arr.join(","))
    }

    input.map(el => {
        let [command, word] = el.split(" ");
        obj[command] === "print" ? obj.command() : obj[command](word);
    })
}

listProcessor(
    // ['add hello', 'add again', 'remove hello', 'add again', 'print']
    ['add pesho', 'add george', 'add peter', 'remove peter','print']
);