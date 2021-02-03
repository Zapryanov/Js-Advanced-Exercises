// function objectFactory(str) {
//     return JSON.parse(str)
//         .reduce((acc, cur) => {
//             for (let key in cur) {
//                 if (!acc.hasOwnProperty(key)) {
//                     acc[key] = cur[key]
//                 }
//             }
//             return acc;
//         },{})
// }

// function solve(str) {
//     return JSON.parse(str).reduce((a, b) => {
//         a = Object.assign(a, b);
//         return a;
//     },{})
// }

function objectFactory(str) {
    return JSON.parse(str)
        .reduce((acc, cur) => {
            Object.entries(cur).forEach(x => {
                const [ key, value ] = x;
                acc[key] = value;
            })
            return acc;
        },{})
}

console.log(objectFactory(
    `[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`
))