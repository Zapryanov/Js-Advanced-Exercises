function populationsInTowns(arr) {
    let obj = arr.reduce((acc, cur) => {
        const [ city, population ] = cur.split(" <-> ");
        if (!acc[city]) {
            acc[city] = 0;
        }
        acc[city] += +population;
        return acc;
    }, {});
    
    Object.entries(obj).forEach(x => console.log(`${x[0]} : ${x[1]}`))
}

populationsInTowns(
    [
        "Istanbul <-> 100000",
        "Honk Kong <-> 2100004",
        "Jerusalem <-> 2352344",
        "Mexico City <-> 23401925",
        "Istanbul <-> 1000"
    ]
);