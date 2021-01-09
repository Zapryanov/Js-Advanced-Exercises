const add = (x, y) => x + y;
const addInverse = (x, y) => x + (1 / y);
const concat = (x, y) => x + y.toString();

function aggregateElements(arr) {
    return [
        arr.reduce(add, 0),
        arr.reduce(addInverse, 0),
        arr.reduce(concat, "")
    ].join("\n");
}

console.log(aggregateElements([1, 2, 3]));