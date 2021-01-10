function autoEngineeringCompany(arr) {
    let result = arr
        .reduce((acc, cur) => {
            let [ brand, model, qty ] = cur.split(" | ");
            if (!acc[brand]) {
                acc[brand] = {};
            }
            if (!acc[brand][model]) {
                acc[brand][model] = 0;
            }
            acc[brand][model] += Number(qty);
            return acc;
        }, {})

    Object.entries(result).map(x => {
        console.log(x[0]);
        Object.entries(x[1]).map(tuple => {
            console.log(`###${tuple[0]} -> ${tuple[1]}`)
        })
    })
};

autoEngineeringCompany(
    [
        "Audi | Q7 | 1000",
        "Audi | Q6 | 100",
        "BMW | X5 | 1000",
        "BMW | X6 | 100",
        "Citroen | C4 | 123",
        "Volga | GAZ-24 | 1000000",
        "Lada | Niva | 1000000",
        "Lada | Jigula | 1000000",
        "Citroen | C4 | 22",
        "Citroen | C5 | 10"
    ]
);

// My previous solution

// function autoEngineeringCompany2(input) {
//     let obj = input
//     .map(x => x.split(" | "))
//     .reduce((acc, cur) => {
//         let [brand, model, amount] = cur.join(", ").split(", ");
//         amount = Number(amount);
//         if (!acc[brand]) {
//             acc[brand] = {};
//             acc[brand][model] = amount;
//         } else {
//             if (!acc[brand][model]) {
//                 acc[brand][model] = amount;
//             } else {
//                 acc[brand][model] += amount;
//             }
//         }
//         return acc;
//     },{});
//     Object.entries(obj).forEach(x => {
//         console.log(x[0]);
//         Object.entries(x[1]).forEach(tuple => console.log(`###${tuple[0]} -> ${tuple[1]}`))
//     });
// }

// autoEngineeringCompany2(
//     [
//         "Audi | Q7 | 1000",
//         "Audi | Q6 | 100",
//         "BMW | X5 | 1000",
//         "BMW | X6 | 100",
//         "Citroen | C4 | 123",
//         "Volga | GAZ-24 | 1000000",
//         "Lada | Niva | 1000000",
//         "Lada | Jigula | 1000000",
//         "Citroen | C4 | 22",
//         "Citroen | C5 | 10"
//     ]
// );