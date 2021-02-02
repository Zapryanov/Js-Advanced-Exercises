function objectFactory(str) {
    return JSON.parse(str)
        .reduce((acc, cur) => {
            for (let key in cur) {
                if (!acc.hasOwnProperty(key)) {
                    acc[key] = cur[key]
                }
            }
            return acc;
        },{})
}

console.log(objectFactory(
    `[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`
))