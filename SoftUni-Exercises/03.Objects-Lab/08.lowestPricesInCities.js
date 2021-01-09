function lowestPricesInCities(arrData) {

    let result = arrData.reduce((acc, cur) => {
        const [ town, product, price ] = cur.split(" | ");
        if (!acc[product]) {
            acc[product] = {};
        }
        acc[product][town] = Number(price);
        return acc;
    }, {});

    Object.entries(result).forEach(x => {
        let item = Object.entries(x[1]).sort((a, b) => a[1] - b[1]).shift();
        console.log(`${x[0]} -> ${item[1]} (${item[0]})`);
    })
}

lowestPricesInCities(
    [
        "Sample Town | Sample Product | 1000",
        "Sample Town | Orange | 2",
        "Sample Town | Peach | 1",
        "Sofia | Orange | 3",
        "Sofia | Peach | 2",
        "New York | Sample Product | 1000.1",
        "New York | Burger | 10"
    ]
)

// SOLUTION with new Map()

// function lowestPricesInCities2(input) {
//     let map = new Map();

//     for(let line of input) {
//         let [ town, product, price ] = line.split(" | ");

//         if(! map.has(product)) {
//             map.set(product, new Map());
//         }

//         map.get(product).set(town, +price);
//     }

//     for(let [product, insideMap] of map) {
//         let lowestPrice = Number.POSITIVE_INFINITY;
//         let townWithLowestPrice = "";
//         for(let [town, price] of insideMap) {
//             if(price < lowestPrice) {
//                 lowestPrice = price;
//                 townWithLowestPrice = town;
//             }
//         }

//         console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`);
//     }
// }

// lowestPricesInCities2(
//     [
//         "Sample Town | Sample Product | 1000",
//         "Sample Town | Orange | 2",
//         "Sample Town | Peach | 1",
//         "Sofia | Orange | 3",
//         "Sofia | Peach | 2",
//         "New York | Sample Product | 1000.1",
//         "New York | Burger | 10"
//     ]
// )